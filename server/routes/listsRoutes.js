const router = require('express').Router()
const listsCtrl = require('../controllers/listsCtrl')

router.post('/', listsCtrl.create)
router.delete('/', listsCtrl.delete)

module.exports = router
