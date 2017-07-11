const router = require('express').Router()
const usersCtrl = require('../controllers/usersCtrl')

router.post('/', usersCtrl.authenticate)

module.exports = router
