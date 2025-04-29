const path = "./default.json";
import fs from "fs";
import pg from "pg";

//TODO:
// seperate functions to a new file

const connectionInfo = {
    db: new pg.Client({
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
        console.log("disconnected");
    }
};

async function getDbData() {
    await connectDB();
    const data = readFile();

    const res = await connectionInfo.db.query(
        "Select config, name from template ORDER BY id ASC"
    );

    const dbData = mapDbRowsToObjects(res.rows);
    console.log("test: ", dbData);

    //if data is array
    // dbData.forEach((item) => {
    //     data.push(item);
    // });

    data.templates = dbData;

    //if data is object
    // dbData.forEach(element => {
    //     data.templates[Object.keys(element)] = Object.values(element)[0];
    // });
    console.log(data);

    writeFile(path, data);
    await disconnectDB();
}

function mapDbRowsToObjects(rows) {
    return rows.map(({ config, name }) => {
        return { [name]: config };
    });
}

//FIXME:
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
        console.log("insert complete for: ", Object.keys(data[item])[0]);
    }

    await disconnectDB();
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
    re;
    fs.writeFileSync(path, JSON.stringify(newData, null, 4), (err) => {
        if (err) throw err;

        console.log("Writing Completed.");
    });
}

function deleteFileContents(dbName = path) {
    writeFile(dbName, []);
    console.log("deleted");
}

async function fetchPageContent(pageName) {
    const fileData = readFile();
    const selectedIndex = fileData.selectedIndex;
    // console.log(selectedIndex);

    // console.log("filedata: ", fileData.templates);

    try {
        return Object.values(fileData.templates[selectedIndex])[0].Contents[
            pageName
        ];
    } catch (error) {
        console.log("no value in JSON file");
    }
}

function getPageDetails() {
    const fileData = readFile();
    const selectedIndex = fileData.selectedIndex;
    const pages = Object.keys(
        Object.values(fileData.templates[selectedIndex])[0].Contents
    );

    const sections = pages.map((item) => {
        return Object.keys(
            Object.values(fileData.templates[selectedIndex])[0].Contents[item]
        );
    });

    // for (let index = 0; index < pages.length; index++) {
    //     console.log(pages[index]);
    //     console.log(sections[index]);
    //     const test = sections[index];
    //     for (let index2 = 0; index2 < test.length; index2++) {
    //         console.log(test[index2]);
    //         console.log(
    //             Object.values(
    //                 Object.values(fileData.templates[selectedIndex])[0]
    //                     .Contents[pages[index]][test[index2]]
    //             )
    //         );
    //     }

    // }
    const contentKeys = pages.map((key, index) => {
        return sections[index].map((element) => {
            console.log(element);
            return Object.keys(
                Object.values(fileData.templates[selectedIndex])[0].Contents[
                    key
                ][element]
            );
        });
    });

    const contentValues = pages.map((key, index) => {
        return sections[index].map((element) => {
            console.log(element);
            return Object.values(
                Object.values(fileData.templates[selectedIndex])[0].Contents[
                    key
                ][element]
            );
        });
    });
    // console.log("Contentkeys", contentKeys);
    // console.log("Contentvalues", contentValues);

    // const all = [];
    // for (let index = 0; index < pages.length; index++) {
    //     const obj = {};
    //     obj.pageName = pages[index];
    //     obj.contents = sections[index];
    //     all.push(obj);
    // }

    const all = pages.map((pageName, index) => ({
        pageName,
        sections: sections[index],
        contentKeys: contentKeys[index],
        contentValues: contentValues[index],
    }));

    // all.map((item, index0) => {
    //     console.log("Page Name: ", item.pageName);
    //     console.log("Sections: ", item.sections);
    //     console.log("Content Keys: ", item.contentKeys);
    //     console.log("Content Values: ", item.contentValues);
    //     console.log("=====================================");
    //     item.contentKeys.map((item2, index1) => {
    //         console.log("Section Name: ", item.sections[index1]);
    //         console.log("Content Keys: ", item2);
    //         console.log("index: ", index1);
    //         console.log("Content Values: ", item.contentValues[index1]);

    //         item2.map((item3, index2) => {
    //             console.log("Content Key: ", item3);
    //             console.log(
    //                 "Content Value: ",
    //                 item.contentValues[index1][index2]
    //             );
    //         });
    //         console.log("=====================================");
    //     });
    // });
    return all;
}

// console.log(await fetchPageContent("Home"));

// deleteFileContents();
export default getDbData;
export { fetchPageContent, getPageDetails, readFile };
