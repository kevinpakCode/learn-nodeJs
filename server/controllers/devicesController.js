const {Devices} = require('./../models/models')
const ApiErrors = require('./../errors/ApiErrors')
const uuid = require('uuid')
const path = require('path')

class DevicesController {
  async create(req, res, next) {
    try {
      const {name, price, brandId, typeId, info} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'assets/static/images', fileName))
      const devices = await Devices.create({name, price, brandId, typeId, img: fileName})
      return res.json(devices)
    } catch (err) {
      console.error(err)
      next(ApiErrors.badRequest(err.message))
    }
  }

  async getAll(req, res) {
    
  }

  async getOne(req, res) {
    
  }

}

module.exports = new DevicesController()