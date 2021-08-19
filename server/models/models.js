const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Baskets = sequelize.define('baskets', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const BasketDevices = sequelize.define('basket_devices', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Devices = sequelize.define('devices', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
})

const Types = sequelize.define('types', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brands = sequelize.define('brands', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Ratings = sequelize.define('ratings', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  rate: {type: DataTypes.STRING,  allowNull: false},
})

const DeviceInfos = sequelize.define('device_infos', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
  title: {type: DataTypes.STRING,  allowNull: false},
  description: {type: DataTypes.STRING,  allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
})

Users.hasOne(Baskets)
Baskets.belongsTo(Users)

Users.hasOne(Ratings)
Ratings.belongsTo(Users)

Baskets.hasMany(BasketDevices)
BasketDevices.belongsTo(Baskets)

Types.hasMany(Devices)
Devices.belongsTo(Types)

Brands.hasMany(Devices)
Devices.belongsTo(Brands)

Devices.hasMany(Ratings)
Ratings.belongsTo(Devices)

Devices.hasMany(BasketDevices)
BasketDevices.belongsTo(Devices)

Devices.hasMany(DeviceInfos)
DeviceInfos.belongsTo(Devices)

Types.belongsToMany(Brands, {through: TypeBrand})
Brands.belongsToMany(Types, {through: TypeBrand})

module.exports = {
  Users,
  Baskets,
  BasketDevices,
  Devices,
  Types,
  Brands,
  Ratings,
  TypeBrand,
  DeviceInfos
}