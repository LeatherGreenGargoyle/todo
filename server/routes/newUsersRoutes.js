const router = require('express').Router()
const newUsersCtrl = require('../controllers/newUsersCtrl')

router.post('/', newUsersCtrl.create)

module.exports = router
