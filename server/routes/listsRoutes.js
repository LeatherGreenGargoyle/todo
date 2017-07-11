const router = require('express').Router()
const listsCtrl = require('../controllers/listsCtrl')

router.post('/', listsCtrl.create)
router.delete('/', listsCtrl.delete)
router.patch('/', listsCtrl.update)

module.exports = router
