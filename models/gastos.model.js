import { pool } from '../database/connection.js'

const gastosAll = async () => {
    const querysql = {
        text: 'SELECT * FROM gastos',
    }
    const { rows } = pool.query(querysql)
    return rows
}

const gastosAdd = async () => {
    const querysql = {
        text: 'INSERT INTO gastos (roommate_id, descripcion, monto) VALUES ($1, $2, $3) RETURNING *',
        values: [roommate_id, descripcion, monto]
    }
    const { rows } = pool.query(querysql)
    return rows[0]
}

const gastosUpdate = async () => {
    const querysql = {
        text: 'UPDATE gastos SET roommate_id = $1, descripcion = $2, monto = $3 WHERE id = $4 RETURNING *;',
        values: [roommate_id, descripcion, monto, id]
    }
    const { rows } = pool.query(querysql)
    return rows[0]
}



const gastosRemove = async () => {
    const querysql = {
        text: 'DELETE FROM gastos WHERE id = $1 RETURNING *;',
        values: [id],

    }
    const { rows } = pool.query(querysql)
    return rows[0]
}




export const gastosModel = {
    gastosAll,
    gastosAdd,
    gastosUpdate,
    gastosRemove


}