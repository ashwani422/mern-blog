import validator from 'validator'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

//-- START function for generating JWT token ------------------------------------------------------------------------------
const generateToken = username => {
  // sign a jwt token
  return jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
//-- END function for generating JWT token -------------------------------------------------------------------------------- 

export const getUser = async (req, res) => {
  try {

    // sanitize received data
    const username = validator.escape(req.user.username)

    // find the user with given username
    const user = await User.findOne({ username })

    // if there is no user with the given username
    if (!user) throw new Error('No user found.')

    // if there is users
    return res.status(200).json({ response: user })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(400).json({ error: error.message })
  }
}


export const registerUser = async (req, res) => {
  try {
    // create a user object with sanitized data
    const newUser = new User({
      username: validator.escape(req.body.username),
      email: validator.escape(req.body.email),
      password: validator.escape(req.body.password),
    })

    const token = generateToken(newUser.username)
    // console.log(token)

    // save the document in the database
    const savedUser = await User.create(newUser)

    // if user saved send back with the token
    return res.status(201).json({ response: {
      username: savedUser.username,
      email: savedUser.email,
      token,
    } })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(400).json({ error: error.message })
  }
}


export const deleteUser = async (req, res) => {
  try {
    // sanitize received data
    const username = validator.escape(req.user.username)

    // find a user by username and delete
    const deletedUser = await User.findOneAndDelete({ username })

    // if there is no user with the given username
    if (!deletedUser) throw new Error('No user found.')

    // if user is deleted successfully
    return res.status(200).json({ response: deletedUser })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(400).json({ error: error.message })
  }
}