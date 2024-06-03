import { gastosModel } from '../models/gastos.model.js';

const allGastos = async (req, res) => {
    try {
        const gasto = await gastosModel.gastosAll();
        return res.status(200).json(gasto);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error'
        });
    }
};

const createGastos = async (req, res) => {
    const { roommate_id, descripcion, monto } = req.body;

    if (!roommate_id || !descripcion || !monto) {
        return res.status(400).json({ error: 'Todos los campos son necesarios' });
    }

    try {
        const gastoNuevo = await gastosModel.gastosAdd(roommate_id, descripcion, monto);
        return res.status(201).json(gastoNuevo);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error'
        });
    }
};

const updateGastos = async (req, res) => {
    const { id, roommate_id, descripcion, monto } = req.body;
    try {
        const gastoUp = await gastosModel.gastosUpdate(id, roommate_id, descripcion, monto);
        return res.status(200).json(gastoUp);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error'
        });
    }
};

const removeGastos = async (req, res) => {
    const { id } = req.query;

    try {
        const gastoRe = await gastosModel.gastosRemove(id);
        return res.status(200).json(gastoRe);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error'
        });
    }
};

export const gastosController = {
    allGastos,
    createGastos,
    updateGastos,
    removeGastos
};
