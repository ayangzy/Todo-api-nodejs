const jwt = require('jsonwebtoken')

exports.generateJwt = async (req, res) => {
  const token = jwt.sign(
    {
      userId: req.body.userId,
    },
    process.env.JWT_SERCRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    },
  )
  res.status(201).send({ accessToken: token })
}
