import { Router } from 'express'
import { roommController } from '../controllers/roomm.controller.js'
const router = Router();

router.get('/', roommController.allRoomm)
router.post('/', roommController.createRoomm)

export default router
