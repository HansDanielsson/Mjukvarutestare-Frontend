const User = require('./User')

// let saveUserName

async function getAllUsers () {
  return await User.findAll()
}

/*
 * This function will create a new user in the database
 * Using help from createUser function
 *
 * @param {String} username - The username of the new user
 * @param {String} password - The password for the new user
 *
 * Return true or error
 */

async function createDbUser (username, password) {
  /*
   * This local function will create a new user in the database
   *
   * @param {String} username - The username of the new user
   * @param {String} password - The password for the new user
   *
   * Return true or false, ignore error message
  */
  async function createUser (username, password) {
    try {
      await User.create({ username, password })
      return true
    } catch (error) {
      return false
    }
  }
  return await createUser(username.trim(), password.trim())
}

/*
 * This function will log in a user with the provided username and password
 *
 * @param {String} username - The username of the user to log in
 * @param {String} password - The password for the user to log in
 *
 * Returns true if the user was successfully logged in
*/
async function loginUser (username, password) {
  // Implement login logic here
  const result = await User.findOne(
    {
      where: {
        username, password
      }
    }
  )
  return !!(result);
}

module.exports = { getAllUsers, createDbUser, loginUser }
