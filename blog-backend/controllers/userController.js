import validator from 'validator'

import User from '../models/User.js'

export const findUser = async (req, res) => {
  try {
    // sanitize received data
    const username = validator.escape(req.params.username)

    // find the user with given username
    const user = await User.findOne({ username })

    // if there is no user with the given username
    if (!user) throw new Error('No user found.')

    // if there is users
    return res.status(200).json({ response: user })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(200).json({ error: error.message })
  }
}


export const getUsers = async (req, res) => {
  try {
    // fetch all the users
    const users = await User.find()

    // if not a single users
    if (Array.isArray(users) && !users.length) throw new Error('No users found.')

    // if there is/are user(s)
    return res.status(200).json({ response: users })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(200).json({ error: error.message })
  }
}


export const addUser = async (req, res) => {
  try {
    // create a user object with sanitized data
    const newUser = new User({
      username: validator.escape(req.body.username),
      email: validator.escape(req.body.email),
      password: validator.escape(req.body.password),
    })

    // save the document in the database
    const savedUser = await newUser.save()

    // if user saved send back
    return res.status(200).json({ response: savedUser })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(200).json({ error: error.message })
  }
}


export const deleteUser = async (req, res) => {
  try {
    // sanitize received data
    const username = validator.escape(req.params.username)

    // find a user by username and delete
    const deletedUser = await User.findOneAndDelete({ username })

    // if there is no user with the given username
    if (!deletedUser) throw new Error('No user found.')

    // if user is deleted successfully
    return res.status(200).json({ response: deletedUser })
  } catch (error) {
    // catch all the errors and send back
    console.log(error.message)
    return res.status(200).json({ error: error.message })
  }
}