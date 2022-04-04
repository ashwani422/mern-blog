import express from 'express'
const router = express.Router()

import protect from '../middlewares/jwtAuthMiddleware.js'
import { getUser, registerUser, deleteUser } from '../controllers/userController.js'


router.get('/login', protect, getUser)
router.post('/register', registerUser)

router.route('/')
  .delete(protect, deleteUser)

export default router
