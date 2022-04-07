import jwt from 'jsonwebtoken'
import createResult from '../utils/createResult.js'

export default function protect(req, res, next) {

  if (req.headers && !req.headers.authorization) {

    console.log('No token found.')
    return res.status(500).json(createResult('No token found.'))

  }

  const token = req.headers.authorization.split(' ')[1]

  try {
    // verify the token and decode
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // set decoded info into req object
    req.user = { id: decoded.id }

  } catch (err) {
    console.log(err.message)
    return res.status(500).json(createResult(err.message))
  }

  next()
}