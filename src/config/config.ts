import dotenv from "dotenv";
import { SequelizeOptions } from "sequelize-typescript";

import { Share } from "../models/share";
dotenv.config();

export const sequelizeConfig: SequelizeOptions = {
    host: process.env.DB_HOST,
    port: 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    models: [
        Share,
    ],
};