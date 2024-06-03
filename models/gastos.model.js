import { pool } from '../database/connection.js'


const gastosAll = async () => {
    const querysql = {
        text: 'SELECT * FROM gastos',
    }
    const { rows } = await pool.query(querysql)
    return rows;
}

const gastosAdd = async (roommate_id, descripcion, monto) => {
    const querysql = {
        text: 'INSERT INTO gastos (roommate_id, descripcion, monto) VALUES ($1, $2, $3) RETURNING *',
        values: [roommate_id, descripcion, monto],
    }

    const { rows } = await pool.query(querysql)
    return rows[0]
}

const gastosUpdate = async (id, roommate_id, descripcion, monto) => {
    const querysql = {
        text: 'UPDATE gastos SET roommate_id = $1, descripcion = $2, monto = $3 WHERE id = $4 RETURNING *;',
        values: [roommate_id, descripcion, monto, id]
    }
    const { rows } = await pool.query(querysql)
    return rows[0]
}

const gastosRemove = async (id) => {
    const querysql = {
        text: 'DELETE FROM gastos WHERE id = $1 RETURNING *;',
        values: [id]
    };
    const { rows } = await pool.query(querysql)
    return rows[0]
}

export const gastosModel = {
    gastosAll,
    gastosAdd,
    gastosUpdate,
    gastosRemove
}
