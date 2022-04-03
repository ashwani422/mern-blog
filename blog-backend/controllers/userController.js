import validator from 'validator'

import User from '../models/User.js'

export const findUser = async (req, res) => {
  try {
    const id = validator.escape(req.params.id)
    console.log(id)
    // const user = await User.findById(id)
    // console.log(user)

    // return res.status(200).json({response: user})
    return res.status(200).json({response: 'success'})
  } catch (error) {
    return res.status(200).json({error: error.message})
  }
}


export const getUsers = async (req, res) => {
  try {
    return res.status(200).json({response: 'getUser'})
  } catch (error) {
    return res.status(200).json({error: error.message})
  }
}


export const addUser = async (req, res) => {
  try {

    const user = req.body

    const newUser = new User(user)
    const savedUser = await User.create(newUser)
    console.log(savedUser)

    return res.status(200).json({response: 'addUser'})
  } catch (error) {
    return res.status(200).json({error: error.message})
  }
}


export const deleteUser = async (req, res) => {
  try {
    const id = validator.escape(req.params.id)

    return res.status(200).json({response: 'deleteUser: ' + id})
  } catch (error) {
    return res.status(200).json({error: error.message})
  }
}