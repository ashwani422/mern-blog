import express from 'express'
const router = express.Router()

import protect from '../middlewares/jwtAuthMiddleware.js'
import {getUser, registerUser, deleteUser} from '../controllers/userController.js'
  
  
router.route('/')
  .get(protect, getUser)
  .post(registerUser)
  .delete(protect, deleteUser)

export default router
