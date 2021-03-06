const express = require('express')
const controller = require('../controllers/task')
const router = express.Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.post('/:id', controller.patch)

module.exports = router