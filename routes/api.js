const express = require('express')
const router = express.Router()

// /api/dogs
router.use('/dogs', require('./dogs'))

module.exports = router
