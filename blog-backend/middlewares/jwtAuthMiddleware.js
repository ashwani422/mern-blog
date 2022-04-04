import jwt from 'jsonwebtoken'

export default function protect(req, res, next) {

  if (req.headers && req.headers.authorization) {

    const token = req.headers.authorization.split(' ')[1]

    try {
      // verify the token and decode
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // set decoded info into req object
      req.user = { username: decoded.username }

    } catch (err) {
      console.log(err.message)
      return res.status(500).json({ error: err.message })
    }

  }

  next()
}