const User = require('../../db').User

const newUsersMethods = {
  create: (req, res) => {
    User.create({
      userName: req.body.username,
      password: req.body.password,
    })
      .then(createdUser => res.send(createdUser))
      .catch(err => res.sendStatus(500).send(err))
  },
}

module.exports = newUsersMethods
