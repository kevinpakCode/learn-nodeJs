const {Brands} = require('./../models/models')
const ApiErrors = require('./../errors/ApiErrors')

class BrandsController {

  async create(req, res) {
    const {name} = req.body
    const brand = await Brands.create({name})
    return res.json(brand)
  }

  async getAll(req, res) {
    const brands = await Brands.findAll()
    return res.json(brands)
  }

}

module.exports = new BrandsController()