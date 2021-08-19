const {Types} = require('./../models/models')
const ApiErrors = require('./../errors/ApiErrors')


class TypesController {

  async create(req, res) {
    const {name} = req.body
    const type = await Types.create({name})
    return res.json(type)
  }

  async getAll(req, res) {
    const types = await Types.findAll()
    return res.json(types)
  }

}

module.exports = new TypesController()