import express from 'express'
const router = express.Router()

import {findUser, getUsers, addUser, deleteUser} from '../controllers/usersController.js'

router.get('/:id', findUser)
router.get('/', getUsers)
router.post('/', addUser)
router.delete('/:id', deleteUser)

export default router