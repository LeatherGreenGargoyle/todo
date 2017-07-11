const router = require('express').Router()
const listsCtrl = require('../controllers/listsCtrl')

router.post('/', listsCtrl.create)

module.exports = router
