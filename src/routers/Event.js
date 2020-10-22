const express = require('express')
const eventController = require('../controllers/Event')
const router = express.Router()
const { upload } = require('../middleware/multer')

router
  .get('/', eventController.getAllEvent)
  .get('/:id', eventController.getEventById)
  .get('/limit/:num', eventController.pageEvent)
  .post('/', upload, eventController.addEvent)

module.exports = router
