const Router = require('express')
const router = new Router()

const devicesController = require('./../controllers/devicesController')

router.post('/', devicesController.create)
router.get('/', devicesController.getAll)
router.get('/:id', devicesController.getOne)




module.exports = router