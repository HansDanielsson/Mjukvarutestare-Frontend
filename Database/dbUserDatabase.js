const User = require('./../Models/user')

async function createUser (userName, password) {
  console.log(userName,password)
  return await User.create({ userName, password })
}

async function getAllUsers () {
  return await User.findAll()
}

module.exports = { createUser, getAllUsers }
