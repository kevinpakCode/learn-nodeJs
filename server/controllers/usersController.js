const ApiErrors = require('./../errors/ApiErrors')

class UsersController {
  async registration(req, res) {

  }

  async login(req, res) {
    
  }

  async check(req, res, next) {
    const {id} = req.query
    if(!id) {
      return next(ApiErrors.badRequest('Id no found'))
    }
    res.json(id)
  }
}

module.exports = new UsersController()