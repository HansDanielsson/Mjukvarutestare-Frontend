const User= require('./User')

async function createUser (username, password) {
  return await User.create({ username, password })
}

async function getAllUsers () {
  return await User.findAll()
}

let saveUserName

/*
 * This function will update the password of a user with logged in username
 *
 * @param {String} password - The new password for the user
 *
 * Returns true if the update was successful
*/
async function updateUser (inpassword) {
  try {
    await User.update(
      { password: inpassword },
      {
        where: {
          username: saveUserName
        }
      }
    )
    return true
  } catch (error) {
    console.error('Error update user:', error)
    return false
  }
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
  const result = await User.findAll({
    where: { username, password }
  })
  if (result.length === 1) {
    saveUserName = username // Spara username för nästa request
    console.log('User logged in successfully!')
    return true
  } else {
    console.log('Invalid username or password')
    return false
  }
}

module.exports = { createUser, getAllUsers, updateUser, loginUser }
