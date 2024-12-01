const User = require('./user')

async function createUser (userName, password) {
  try {
    const user = new User({ userName, password })
    await user.save()
    console.log('User created successfully!')
  } catch (error) {
    console.error('Error creating user:', error)
  }
}

function loginUser (userName, password) {
  // Implement login logic here
  console.log('User logged in successfully!')
}

module.export = { createUser, loginUser }
