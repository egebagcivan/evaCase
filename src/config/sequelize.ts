import { Sequelize } from 'sequelize-typescript';
import { sequelizeConfig } from './config.ts';

const sequelize = new Sequelize(sequelizeConfig);

export default sequelize;
