const connection = require('../configs/db')

const Event = {
  getEventById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM eventdata where id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllEvent: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM eventdata', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  searchEvent: (nama) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM eventdata WHERE name LIKE "%${nama}%"`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  pageEvent: (num) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM eventdata LIMIT ${num} `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addEvent: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO eventdata SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

module.exports = Event
