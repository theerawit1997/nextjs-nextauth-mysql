import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, 
  process.env.DATABASE_USER, 
  process.env.DATABASE_PASSWORD, 
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    dialectModule: mysql2,
    logging: process.env.NODE_ENV === "development",
  }
);

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL has been established successfully.");
    await sequelize.sync({ alter: true });
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    throw error;
  }
};

export default sequelize;
