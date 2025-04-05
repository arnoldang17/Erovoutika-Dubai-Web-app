const path = "./default.json";
import fs from "fs";
import pg from "pg";

const connectionInfo = {
    db: new pg.Pool({
        // user: import.meta.env.DB_USER,
        // password: import.meta.env.DB_PASSWORD,
        // host: import.meta.env.DB_HOST,
        // port: import.meta.env.DB_PORT,
        // database: import.meta.env.DB_DATABASE,
        user: "postgres",
        password: "postgres ",
        host: "localhost",
        port: 5432,
        database: "test",
    }),
    status: false,
};

let index = 2;

const connectDB = async (db) => {
    if (!connectionInfo.status) {
        await connectionInfo.db
            .connect()
            .then(() => {
                console.log("111111");
                connectionInfo.status = true;
                return db;
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

const disconnectDB = async () => {
    if (connectionInfo.status) {
        await connectionInfo.db.end();
        connectionInfo.status = false;
    }
};

async function getDbData() {
    await connectDB();
    const data = [];

    const res = await connectionInfo.db.query(
        "Select config, name from template ORDER BY id ASC"
    );

    const dbData = mapDbRowsToObjects(res.rows);
    console.log("test: ", dbData);

    dbData.forEach((item) => {
        data.push(item);
    });
    console.log(data);

    writeFile(path, data);
    await disconnectDB();
    console.log("disconnected");
}

function mapDbRowsToObjects(rows) {
    return rows.map(({ config, name }) => {
        return { [name]: config };
    });
}

async function insertDbData() {
    await connectDB();
    const data = readFile();

    const query = `INSERT INTO template (config, name) VALUES ($1, $2) RETURNING *`;

    for (const item in data) {
        console.log(String(Object.keys(item)));
        const values = [
            Object.values(data[item])[0],
            Object.keys(data[item])[0],
        ];

        const res = await connectionInfo.db.query(query, values);
        console.log("insert complete for: ", Object.keys(JSONData[item])[0]);
    }

    await disconnectDB();
    console.log("disconnected");
}

function readFile(dbName = path) {
    return JSON.parse(
        fs.readFileSync(path, "utf8", (err, data) => {
            if (err) throw err;
            console.log("Reading Completed");
        })
    );
}

function writeFile(dbName = path, newData) {
    fs.writeFileSync(path, JSON.stringify(newData, null, 4), (err) => {
        if (err) throw err;

        console.log("Writing Completed.");
    });
}

function deleteFileContents(dbName = path) {
    writeFile(dbName, []);
    console.log("deleted");
}

function fetchPageContent(pageName) {
    const fileData = readFile();
    return Object.values(fileData[index])[0].Contents[pageName];
}

console.log(fetchPageContent("Training"));

// deleteFileContents();
export default getDbData;
export { fetchPageContent };
