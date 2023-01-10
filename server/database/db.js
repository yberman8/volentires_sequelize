import mysql from "mysql2";
import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, null, {
  dialect: "mysql",
  host: process.env.HOST,
});

export default sequelize;


