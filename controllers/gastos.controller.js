import { gastosModel } from "../models/gastos.model.js";

const allGastos = async (req, res) => {
    try {
        const gasto = await gastosModel.gastosAll()
        return res.status(200).json(gasto)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se pueden obtener gastos'
        })
    }
}

const createGastos = async (req, res) => {
    const { } = req.body

    try {
        const gastoNew = await gastosModel.gastosAdd()
        return res.status(200).json(gastoNew)


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se pueden obtener gastos'
        })
    }
}

const updateGastos = async (req, res) => {
    try {
        const { id } = req.query
        const { nombre, descripcion, monto } = req.body
        const gastoUp = await gastosModel.gastosUpdate(id, nombre, descripcion, monto)
        return res.status(200).json(gastoUp)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se pueden obtener gastos'
        })
    }
}

const removeGastos = async (req, res) => {
    try {
        const { id } = req.query
        const gastoRe = await gastosModel.gastosRemove(id)
        return res.status(200).json(gastoRe)

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            error: 'no se pueden obtener gastos'
        })

    }
}

export const gastosController = {
    allGastos,
    createGastos,
    updateGastos,
    removeGastos
}