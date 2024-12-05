// Fil för attt hantera Express server
const Express = require('express')
const bodyParser = require('body-parser')
const { logUser, createUserManager } = require('./Models/userManager')
const { updateUser, loginUser } = require('./Models/user')

const portNr = 5000

// Konfigurera server med Body-parser
const application = new Express()
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({ extended: false }))

// Starta upp server
application.listen(portNr, () => {
  console.log(`Nu ligger servern på portNr ${portNr} och lyssnar efter inkommande requests`)
})

// Get-request på root-address för att returnera index.html
application.get('', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

application.get('/index.html', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

application.post('/loginuser', async (req, res) => {
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body
  const result = await loginUser(data.username.trim(), data.password.trim())
  if (result) {
    res.sendFile('./loginuser.html', { root: __dirname })
  } else {
    res.sendFile('./index.html', { root: __dirname })
  }
})

application.post('/registeruser', async (req, res) => {
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body

  // Spara data till databasen
  await createUserManager(data.username.trim(), data.password.trim())

  // Return respons till User
  res.redirect('/')
})

// PUT-request för att uppdatera en befintlig user

application.post('/updatepw', async (req, res) => {
  // Denna payload innehåller 1 st attribut, password
  const data = req.body

  const result = await updateUser(logUser.username, data.password.trim())

  if (result) {
    res.status(200).send('User updated successfully')
  } else {
    res.status(404).send('User not found')
  }
})