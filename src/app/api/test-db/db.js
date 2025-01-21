import mysql from "mysql2/promise";

export const connectMySQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
    console.log("Connected to MySQL Database");

    await connection.ping(); //ลอง ping ดู
    console.log("Database connection is active");

    return connection;
  } catch (error) {
    console.error("Error connecting to MySQL Database: ", error.message);
    throw error;
  }
};
