import validator from 'validator'

import Post from '../models/Post.js'
import createResult from "../utils/createResult.js"


export const getPosts = async (req, res) => {
  try {

    // extracting the id comming from the token
    const id = validator.escape(req.user.id)

    // extracting all the posts related to the user id
    const posts = await Post.find({ userId: id })
    console.log(posts)

    if (!posts.length) throw new Error('No posts found.')

    return res.status(200).json(createResult(false, posts))

  } catch (err) {
    // catch all the errors and send back
    console.log(err.message)
    return res.status(400).json(createResult(err.message))
  }
}


export const createPost = async (req, res) => {
  try {

    // extracting the id comming from the token
    const id = validator.escape(req.user.id)
    // receiving title and post from frontend
    const title = validator.escape(req.body.title)
    const content = validator.escape(req.body.content)

    // find the post with the entered title
    const isDuplicateTitle = await Post.find({ title })

    // if the post with same title already exist
    if (isDuplicateTitle.length) throw new Error('Blog with this title already exist.')

    // create new post
    const newPost = new Post({
      userId: id,
      title,
      content,
    })

    // now save the newly created post into the database
    const savedPost = await Post.create(newPost)

    return res.status(200).json(createResult(false, { savedPost }))

  } catch (err) {
    // catch all the errors and send back
    console.log(err.message)
    return res.status(400).json(createResult(err.message))
  }
}