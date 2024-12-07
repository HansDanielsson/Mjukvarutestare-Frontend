const User = require('./User')

/*
 * This function will select password for username from database
 *
 * @param {String} username - The username
 *
 * Returns the user's password or Error
 */

async function selectPassword (username) {
  try {
    const result = await User.findOne(
      {
        where: {
          username
        }
      }
    )
    console.log('selectPassword = ', result)
    if (result) {
      return result.password
    } else {
      throw new Error('User not found')
    }
  } catch (error) {
    console.error('Error selecting password:', error)
    throw error
  }
}

/*
 * This function will update the password of a user
 *
 * @param {String} username - the username
 * @param {String} password - The new password for the user
 *
 * Returns true if the update was successful
*/
async function updateUser (username, password) {
  try {
    await User.update(
      { password },
      {
        where: {
          username
        }
      }
    )
    return true
  } catch (error) {
    return false
  }
}

module.exports = { selectPassword, updateUser }
