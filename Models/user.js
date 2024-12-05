const { DataTypes } = require('sequelize')
const sequelize = require('./../Database/dbConnect')

const User = sequelize.define(
  'User',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
  },
  {
    tableName: 'Users', // Mappas till tabellen i databasen
    timestamps: false // Om du inte har kolumner som createAt/updateAt
  }
)

/*
 * This function will update the password of a user with the same username
 *
 * @param {String} username - The username of the user to update
 * @param {String} password - The new password for the user
 *
*/
async function updateUser (inusername, inpassword) {
  try {
    await User.update(
      { password: inpassword },
      {
        where: {
          username: inusername
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
*/
async function loginUser (username, password) {
  // Implement login logic here
  const result = await User.findAll({
    where: { username, password }
  })
  if (result.length === 1) {
    console.log('User logged in successfully!')
    return true
  } else {
    console.log('Invalid username or password')
    return false
  }
}

module.exports = { User, updateUser, loginUser }
