const Router = require('express')
const router = new Router()
const UsersController = require('./../controllers/usersController')

router.post('/registration', UsersController.registration)
router.post('/login', UsersController.login)
router.get('/auth', UsersController.check)


module.exports = router