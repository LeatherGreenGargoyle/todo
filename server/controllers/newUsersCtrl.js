const User = require('../../db').User

const newUser = {
  create: (req, res) => {
    User.create({
      userName: req.body.username,
      password: req.body.password,
      lists: [],
    }, (err, createdUser) => {
      if (err) {
        res.send(400)
      } else {
        res.send(createdUser)
      }
    })
  },
}

module.exports = newUser
