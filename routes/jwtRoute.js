const express = require('express')
const router = express.Router()
const jwt = require('../utils/jwt')

router.route('/').post(jwt.generateJwt)

module.exports = router
