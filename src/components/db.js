const path = "./default.json";
import fs from "fs";
import pg from "pg";
import { createClient } from "@supabase/supabase-js";
import { log } from "console";

//TODO:
// seperate functions to a new file

//NOTE:
// user: import.meta.env.DB_USER,
// password: import.meta.env.DB_PASSWORD,
// host: import.meta.env.DB_HOST,
// port: import.meta.env.DB_PORT,
// database: import.meta.env.DB_DATABASE,
// user: "postgres",
// password: "postgres ",
// host: "localhost",
// port: 5432,
// database: "test",

// const supabaseUrl = import.meta.env.SUPABASE_URL;
// const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;
const supabaseUrl = " https://zrwokrbdolhwjwabonwk.supabase.co/";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyd29rcmJkb2xod2p3YWJvbndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MjgyMDAsImV4cCI6MjA1OTMwNDIwMH0.aTj5w3lP0p3PurDhR_sIYT1fszvoAV4PpAuOMEX18ZA";
const connectionInfo = {
    db: createClient(supabaseUrl, supabaseKey),
    status: false,
};

async function getDbData() {
    const tdata = readFile();

    try {
        // Fetch data from the "Templates" table
        const { data, error } = await connectionInfo.db
            .from("Templates")
            .select("*"); // Select all columns

        if (error) {
            console.error("Error fetching data:", error);
            return [];
        }

        console.log("Fetched data:", data);

        // Map the rows to objects if needed
        const mappedData = mapDbRowsToObjects(data);
        // console.log("Mapped data:", mappedData);
        tdata.templates = mappedData; // Update the JSON data with fetched data
        // console.log(tdata.templates);
        writeFile(path, tdata); // Write the updated data back to the JSON file
        return mappedData;
    } catch (err) {
        console.error("Unexpected error:", err);
        return [];
    }
};

function mapDbRowsToObjects(rows) {
    return rows.map(({ Name, config }) => {
        return { [Name]: config };
    });
}

async function insertDbData() {
    const tdata = readFile(); // Read data from the JSON file
    const templates = tdata.templates;

    const insertData = templates.map((template) => {
        const name = Object.keys(template)[0];
        const config = Object.values(template)[0];
        return {
            Name: name,
            config: config, // JSON field
        };
    });

    try {
        // Perform the upsert operation
        const { data, error } = await connectionInfo.db
            .from("Templates")
            .upsert(insertData, { onConflict: "Name" }); // Use "Name" as the unique key

        if (error) {
            console.error("Error inserting/updating data:", error);
        } else {
            console.log("Inserted/Updated data:", data);
        }
    } catch (err) {
        console.error("Unexpected error:", err);
    }
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

async function fetchPageContent(pageName) {
    const fileData = readFile();
    const selectedIndex = fileData.selectedIndex;

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

    const contentKeys = pages.map((key, index) => {
        return sections[index].map((element) => {
            // console.log(element);
            return Object.keys(
                Object.values(fileData.templates[selectedIndex])[0].Contents[
                    key
                ][element]
            );
        });
    });

    const contentValues = pages.map((key, index) => {
        return sections[index].map((element) => {
            // console.log(element);
            return Object.values(
                Object.values(fileData.templates[selectedIndex])[0].Contents[
                    key
                ][element]
            );
        });
    });

    const all = pages.map((pageName, index) => ({
        pageName,
        sections: sections[index],
        contentKeys: contentKeys[index],
        contentValues: contentValues[index],
    }));

    return all;
}

function updateContent(location, description) {
    const properLocation = location.split("-");
    const fileData = readFile();
    const selectedIndex = fileData.selectedIndex;
    const pageName = properLocation[0];
    const sectionName = properLocation[1];
    const contentName = properLocation[2];
    const contentName2 = properLocation[3];
    const contentName3 = properLocation[4];

    console.log("pageName", pageName);
    console.log("sectionName", sectionName);
    console.log("contentName", contentName);
    console.log("contentName2", contentName2);
    console.log("contentName3", contentName3);

    // Directly modify the nested object in fileData
    if (contentName3) {
        Object.values(fileData.templates[selectedIndex])[0].Contents[pageName][
            sectionName
        ][contentName][contentName2][contentName3] = description;
    } else if (contentName2) {
        Object.values(fileData.templates[selectedIndex])[0].Contents[pageName][
            sectionName
        ][contentName][contentName2] = description;
    } else {
        Object.values(fileData.templates[selectedIndex])[0].Contents[pageName][
            sectionName
        ][contentName] = description;
    }

    writeFile(path, fileData);
    insertDbData(); // Insert the updated data into the database
}

await insertDbData(); // Call the function to insert data into the database
await getDbData(); // Call the function to fetch data from the database

export default getDbData;
export { fetchPageContent, getPageDetails, readFile, updateContent };
