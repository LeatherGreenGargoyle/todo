const User = require('../../db').User

const currentUser = {
  authenticate: (req, res) => {
    console.log('body is ', req.body)
    User.findOne({
      'userName': req.body.username,
      'password': req.body.password,
    }, (err, foundUser) => {
      if (err) {
        console.log(err)
        res.sendStatus(400)
      } else if (foundUser) {
        console.log(foundUser)
        if (foundUser.password === req.body.password) {
          res.send(foundUser)
        } else {
          res.sendStatus(400)
        }
      } else {
        res.sendStatus(400)
      }
    })
  },
}

module.exports = currentUser
