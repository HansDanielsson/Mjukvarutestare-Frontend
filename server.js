// Fil för attt hantera Express server
const Express = require('express')
const bodyParser = require('body-parser')
const { createUser } = require('./Database/dbUserDatabase')

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
  console.log('Empty url')
  res.sendFile('./index.html', { root: __dirname })
})

application.get('/index.html', (req, res) => {
  console.log('Request to /index.html')
  res.sendFile('./index.html', { root: __dirname })
})

application.get('/script', (req, res) => {
  console.log('Request to /script')
  res.sendFile('./Script/index-script.js', { root: __dirname })
})

application.post('/loginuser', (req, res) => {
  console.log('Request to /loginuser')
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body
  console.log(data)

  // res.sendFile('./loginuser.html', { root: __dirname })
})

application.post('/registeruser', async (req, res) => {
  console.log('Request to /registeruser')
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body

  // Spara data till databasen
  await createUser(data.username.trim(), data.password.trim())

  console.log('Ny användare skapad: ', data.username, data.password)

  // Return respons till User
  res.redirect('/')
})
