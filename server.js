// Fil för attt hantera Express server
const Express = require('express')
const bodyParser = require('body-parser')
const { createUser, getAllUsers } = require('./Database/dbUserDatabase')

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

application.post('/loginuser', (req, res) => {
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body
  console.log(data)

  // res.sendFile('./loginuser.html', { root: __dirname })
})

application.post('/registeruser', async (req, res) => {
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body

  // Spara data till databasen
  // let respUser = await createUser(data.username.trim(), data.password.trim())

  console.log('Ny användare skapad: ', respUser)

  // Return respons till User
  res.redirect('/')
})
