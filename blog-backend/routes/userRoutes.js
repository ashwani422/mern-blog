import express from 'express'
const router = express.Router()

import protect from '../middlewares/jwtAuthMiddleware.js'
import { loginUser, registerUser, deleteUser } from '../controllers/userController.js'


router.route('/')
  .get(loginUser)
  .post(registerUser)
  .delete(protect, deleteUser)

export default router
