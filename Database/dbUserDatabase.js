const User = require('./../Models/user')

async function createUser (username, password) {
  console.log(username, password)
  return await User.create({ username, password })
}

async function getAllUsers () {
  return await User.findAll()
}

module.exports = { createUser, getAllUsers }
