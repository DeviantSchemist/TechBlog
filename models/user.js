const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../config')

const User = pls.defineUser(sequelize, {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  post: DataTypes.STRING,
  comment: DataTypes.STRING
})

module.exports = User