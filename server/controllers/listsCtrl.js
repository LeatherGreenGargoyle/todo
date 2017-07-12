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
          User.findById(req.body.user.toString()),
        ])
      })
      .then(([newList, foundUser]) => {
        foundUser.lists.push(newList)
        return foundUser.save()
      })
      .then(savedUser => res.send(savedUser))
      .catch(err => res.status(500).send(err))
  },

  delete: (req, res) => {
    List.findByIdAndRemove(req.body.listId)
      .then(() => User.findById(req.body.userId))
      .then((foundUser) => {
        foundUser.lists.pull(req.body.listId)
        return foundUser.save()
      })
      .then(savedUser => res.send(savedUser))
      .catch(err => res.status(500).send(err))
  },

  update: (req, res) => {
    List.findByIdAndUpdate(
      req.body.listId,
      { $set: { tasks: req.body.tasks } }
    )
      .then((updatedList) => {
        return Promise.all([
          updatedList,
          User.findById(req.body.userId),
        ])
      })
      .then(([updatedList, foundUser]) => {
        const list = foundUser.lists.id(req.body.listId)
        list.set(updatedList)
        return foundUser.save()
      })
      .then(savedUser => res.send(savedUser))
      .catch(err => res.status(500).send(err))
  },
}

module.exports = listsMethods
