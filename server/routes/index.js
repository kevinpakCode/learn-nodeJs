const Router = require('express')
const router = new Router()

const usersRouter = require('./usersRouter')
const devicesRouter = require('./devicesRouter')
const brandsRouter = require('./brandsRouter')
const typesRouter = require('./typesRouter')

router.use('/user', usersRouter)
router.use('/device', devicesRouter)
router.use('/brand', brandsRouter)
router.use('/type', typesRouter)




module.exports = router