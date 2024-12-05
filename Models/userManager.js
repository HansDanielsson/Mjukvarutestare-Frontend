const User = require('./user')
const { createUser } = require('./../Database/dbUserDatabase')
const logUser = User

/*
 * This function will create a new user in the database
 *
 * @param {String} username - The username of the new user
 * @param {String} password - The password for the new user
 *
 */

async function createUserManager (username, password) {
  try {
    await createUser(username, password)
    console.log('User created successfully!', username, password)
  } catch (error) {
    console.error('Error creating user:', error)
  }
}

module.exports = { logUser, createUserManager }
