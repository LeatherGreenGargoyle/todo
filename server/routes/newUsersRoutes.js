const router = require('express').Router()
const newUsersCtrl = require('../controllers/newUsersCtrl')

router.post('/', newUsersCtrl.createUser)
