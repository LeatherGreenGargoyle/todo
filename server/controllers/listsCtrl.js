const List = require('../../db').List
const User = require('../../db').User

const listsMethods = {
  create: (req, res) => {
    List.create({
      user: req.body.user,
      title: req.body.title,
      tasks: req.body.tasks,
    })
      .then((newList) => {
        return Promise.all([
          newList,
          User.findById(req.body.user.toString())
        ])
      })
      .then(([newList, foundUser]) => {
        foundUser.lists.push(newList)
        return foundUser.save()
      })
      .then(savedUser => res.send(savedUser))
      .catch(err => res.sendStatus(500).send(err))
  },

  delete: (req, res) => {
    User.findById(req.body.userId, (err, foundUser) => {
      if (err) console.log(err)
      if (foundUser) {
        foundUser.lists.pull(req.body.listId)
        foundUser.save(err => console.log(err))
        List.findByIdAndRemove(req.body.listId, (err) => {
          console.log(err)
        })
        res.send(foundUser)
      }
    })
  },

  update: (req, res) => {
    List.findById(req.body.listId, (err, foundList) => {
      if (err) console.log(err)
      if (foundList) {
        foundList.tasks = req.body.tasks
        foundList.save((err) => {
          if (err) {
            console.log(err)
            res.sendStatus(400)
          } else {
            User.findById(req.body.userId, (err, foundUser) => {
              let list = foundUser.lists.id(req.body.listId)
              list.set(foundList)
              foundUser.save((err, savedUser) => {
                if (err) console.log(err)
                if (savedUser) res.send(savedUser)
              })
            })
          }
        })
      }
    })
  }
}

module.exports = listsMethods
