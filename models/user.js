const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../config')

// user has no column names because we are only using defineUser's username and password fields
const User = pls.defineUser(sequelize, {})

module.exports = User