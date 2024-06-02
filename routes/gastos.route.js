import { Router } from "express";
import { gastosController } from '../controllers/gastos.controller.js'

const router = Router()

router.get('/', gastosController.allGastos)
router.post('/', gastosController.createGastos)
router.put('/', gastosController.updateGastos)
router.delete('/', gastosController.removeGastos)

export default router