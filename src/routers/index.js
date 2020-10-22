const express = require('express')
const routerEvent = require('./Event')

const router = express.Router()

router
  .use('/event', routerEvent)
module.exports = router
