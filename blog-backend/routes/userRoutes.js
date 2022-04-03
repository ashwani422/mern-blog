import express from 'express'
const router = express.Router()

import {findUser, getUsers, addUser, deleteUser} from '../controllers/userController.js'

router.get('/:username', findUser)
router.get('/', getUsers)
router.post('/', addUser)
router.delete('/:username', deleteUser)

export default router