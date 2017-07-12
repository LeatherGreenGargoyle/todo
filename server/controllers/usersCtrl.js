const User = require('../../db').User

const usersMethods = {
  authenticate: (req, res) => {
    User.findOne({
      'userName': req.body.username,
      'password': req.body.password,
    })
      .then((foundUser) => {
        if (foundUser.password === req.body.password) {
          res.send(foundUser)
        } else {
          res.status(400).send('Invalid user / password combination')
        }
      })
      .catch(err => res.status(400).send(err))
    // User.findOne({
    //   'userName': req.body.username,
    //   'password': req.body.password,
    // }, (err, foundUser) => {
    //   if (err) {
    //     res.sendStatus(400)
    //   } else if (foundUser) {
    //     if (foundUser.password === req.body.password) {
    //       res.send(foundUser)
    //     } else {
    //       res.sendStatus(400)
    //     }
    //   } else {
    //     res.sendStatus(400)
    //   }
    // })
  },
}

module.exports = usersMethods
