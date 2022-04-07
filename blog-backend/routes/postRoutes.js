import express from 'express'
const router = express.Router()

import protect from '../middlewares/jwtAuthMiddleware.js'
import { createPost, getPosts } from '../controllers/postController.js'


router.get('/', protect, getPosts)
router.post('/', protect, createPost)

export default router