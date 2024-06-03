import { roommModel } from '../models/roomm.model.js';

const allRoomm = async (req, res) => {
    try {
        const allR = await roommModel.roommAll();
        return res.status(200).json(allR);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error',
        });
    }
};

const createRoomm = async (req, res) => {
    try {
        const creaRoomm = await roommModel.roommCreate();
        return res.status(200).json(creaRoomm);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error: 'Error',
        });
    }
};

export const roommController = {
    allRoomm,
    createRoomm,
};
