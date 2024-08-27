import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "mydb",
});


db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

export default db;
 