import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { Dialect } from "sequelize/types";
import { SequelizeOptions } from "sequelize-typescript";
dotenv.config();

const sequelizeConfig: SequelizeOptions = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: process.env.DB_DIALECT as Dialect || 'postgres',
    logging: true,
};

const sequelize = new Sequelize(sequelizeConfig);

export default sequelize;
