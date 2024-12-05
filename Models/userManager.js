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
/*
 * This function will update the password of a user with the same username
 *
 * @param {String} username - The username of the user to update
 * @param {String} password - The new password for the user
 *
 * @returns {Promise<User>} Returns the updated user object
*/
async function updateUserManager (username, password) {
  try {
    const user = new User({ username, password })
    await user.save()
    console.log('User update successfully!')
  } catch (error) {
    console.error('Error update user:', error)
  }
}

/*
 * This function will log in a user with the provided username and password
 *
 * @param {String} username - The username of the user to log in
 * @param {String} password - The password for the user to log in
*/

async function loginUserManager (username, password) {
  // Implement login logic here
  const result = await User.findAll({
    where: { username, password }
  })
  if (result.length === 1) {
    logUser.username = username
    logUser.password = password
    console.log('User logged in successfully!', result.length)
    return true
  } else {
    console.log('Invalid username or password')
    return false
  }
}

module.exports = { createUserManager, updateUserManager, loginUserManager }
