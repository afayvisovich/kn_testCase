import { DataTypes } from "sequelize";
import { dbConnection } from "../integration/database.js";

export const tableData = dbConnection.define(
    'codeName',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    },
    { 
        timestamps: false,
        tableName: 'codenames'
    }
);

tableData.getAll = async (req, res) => {
    try {
        const data = await tableData.findAll();
        return res.send(data);
    } catch (err) {
        console.error(`Error on fetching all data: ${err}`)
    }
}

tableData.getFiltered = async (req, res) => {
    try {
        const data = await tableData.findAll();
        //this looks for word 'test', so 'testing' -> false
        //return res.send(data.filter((row) => row.id && row.code === "025" && row.name.split(' ').includes('test')));
        // this looks for 'test' substring, so 'testing' -> true
        return res.send(data.filter((row) => row.id && row.code === "025" && row.name.includes('test')));
    } catch (err) {
        console.error(`Error on fetching all data: ${err}`)
    }
}


