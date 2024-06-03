import { pool } from "../database/connection.js";
import { v4 as uuidv4 } from 'uuid'
import fetch from 'node-fetch'



const roommAll = async () => {
    const querysql = 'SELECT * FROM roommates';
    const { rows } = await pool.query(querysql);
    return rows;
};

const roommCreate = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    const nombre = `${user.name.first} ${user.name.last}`;
    const id = uuidv4();
    await pool.query('INSERT INTO roommates (id, nombre) VALUES ($1, $2)', [id, nombre]);
    return { id, nombre };
};

export const roommModel = {
    roommAll,
    roommCreate,
};