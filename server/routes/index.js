const usersRoutes = require('./usersRoutes.js')
const newUsersRoutes = require('./newUsersRoutes')
const listsRoutes = require('./listsRoutes.js')

module.exports = (app) => {
  app.use('/users', usersRoutes)
  app.use('/lists', listsRoutes)
  app.use('/newUsers', newUsersRoutes)
}
