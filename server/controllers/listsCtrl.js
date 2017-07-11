const List = require('../../db').List
const User = require('../../db').User

const listsMethods = {
  create: (req, res) => {
    List.create({
      user: req.body.user,
      title: req.body.title,
      tasks: req.body.tasks,
    }, (err, newList) => {
      if (err) {
        console.log(err)
        res.sendStatus(400)
      } else if (newList) {
        User.findById(req.body.user.toString(), (err, foundUser) => {
          if (err) console.log(err)

          foundUser.lists.push(newList)
          foundUser.save((err) => {
            if (err) console.log(err)
            res.sendStatus(200)
          })
        })
      }
    })
  },

  delete: (req, res) => {
    User.findById(req.body.userId, (err, foundUser) => {
      if (err) console.log(err)
      if (foundUser) {
        foundUser.lists.pull(req.body.listId)
        res.send(foundUser)
      }
    })
  },
}

module.exports = listsMethods
