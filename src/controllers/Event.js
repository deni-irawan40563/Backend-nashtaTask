const eventModels = require('../models/Event')
const helpers = require('../helpers/Helpers')

const Event = {
  getEventById: (req, res) => {
    const id = req.params.id
    eventModels.getEventById(id)
      .then((result) => {
        resultEvent = result
        helpers.response(res, null, resultEvent, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllEvent: (req, res) => {
    eventModels.getAllEvent()
      .then((result) => {
        resultEvent = result
        helpers.response(res, null, resultEvent, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  searchEvent: (req, res) => {
    const nama = req.params.nama
    eventModels.searchEvent(nama)
    .then((result) => {
        resultEvent = result
        helpers.response(res, null, resultEvent, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  pageEvent: (req, res) => {
    const num = req.params.num
    eventModels.pageEvent(num)
      .then((result) => {
        resultEvent = result
        helpers.response(res, null, resultEvent, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  addEvent: (req, res) => {
    console.log(req.body)
    const {
      title,
      location,
      participant,
      date,
      note,
      image
    } = req.body
    const data = {
      title,
      participant,
      location,
      date,
      note,
      image
    }
    if (req.files) {
      data.image = req.files.map((file) => {
        return process.env.BASE_URL+ '/uploads/image/'+ file.filename
      }).join()
    }
    eventModels.addEvent(data)
      .then((result) => {
        resultEvent = result
        console.log(result)
        helpers.response(res, null, resultEvent, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = Event
