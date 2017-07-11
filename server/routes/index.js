const usersRoutes = require('./usersRoutes.js')
const newUsersRoutes = require('./newUsersRoutes.js')
const listsRoutes = require('./listRoutes.js')

module.exports = (app) => {
  app.use('/users', usersRoutes)
  app.use('/lists', listsRoutes)
  app.use('/newUsers', newUsersRoutes)
}
