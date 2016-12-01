import lowdb from "lowdb";
import fileAsync from "lowdb/lib/file-async";

const db = lowdb("db.json", {
    storage: fileAsync
});

db.defaults({
    users: {}
}).value();

export default db;
