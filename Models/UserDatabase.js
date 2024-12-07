const User = require('./User')

/*
 * This function will select password for username from database
 *
 * @param {String} username - The username
 *
 * Returns the user's password or false
 */

async function selectPassword (username) {
  const result = await User.findOne(
    {
      where: {
        username
      }
    }
  )

  if (result) {
    return result.password
  }
  return false
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
