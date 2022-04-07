import { Sequelize } from 'sequelize';

const dbUrl = process.env.DATABASE_URL;

export const dbConnection = new Sequelize(dbUrl);
