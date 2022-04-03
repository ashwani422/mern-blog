import User from '../models/User.js'

export const findUser = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    console.log(user)

    return res.json({response: user})
  } catch (error) {
    return res.json({error: error.message})
  }
}


export const getUsers = async (req, res) => {
  try {
    return res.json({response: 'getUser'})
  } catch (error) {
    return res.json({error: error.message})
  }
}


export const addUser = async (req, res) => {
  try {

    const user = req.body

    const newUser = new User(user)
    const savedUser = await newUser.save()
    console.log(savedUser)

    return res.json({response: 'addUser'})
  } catch (error) {
    return res.json({error: error.message})
  }
}


export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id

    return res.json({response: 'deleteUser: ' + id})
  } catch (error) {
    return res.json({error: error.message})
  }
}