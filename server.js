// Fil för attt hantera Express server
const Express = require('express')
const bodyParser = require('body-parser')
const { createDbUser, loginUser } = require('./Models/UserManager')
const { selectPassword, updateUser } = require('./Models/UserDatabase')

const portNr = 5000
let saveUserName = 'NoUserName'

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

application.get('/selectpassword', (req, res) => {
  res.sendFile('./selectpassword.html', { root: __dirname })
})

application.post('/selectpassword', async (req, res) => {
  // Denna payload innehåller 1 st attribut, username
  const data = req.body
  const result = await selectPassword(data.username.trim())
  console.log('password = ', result)
  res.sendFile('./selectpassword.html', { root: __dirname })
})

application.get('/vipuser', (req, res) => {
  res.sendFile('./vipuser.html', { root: __dirname })
})

application.post('/vipuser', async (req, res) => {
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body
  const result = await loginUser(data.username.trim(), data.password.trim())
  if (result) {
    saveUserName = data.username.trim()
    res.redirect('/vipuser')
  } else {
    res.redirect('/')
  }
})

application.post('/registeruser', async (req, res) => {
  // Denna payload innehåller 2 st attribut, username och password
  const data = req.body

  // Spara data till databasen
  await createDbUser(data.username, data.password)
  // Return respons till User
  res.redirect('/')
})

// Get-request för att redirecta till loginuser-sidan
application.get('/updatepw', (req, res) => {
  res.redirect('/vipuser')
})

// POST-request för att uppdatera user med password
application.post('/updatepw', async (req, res) => {
  // Denna payload innehåller 1 st attribut, password
  const data = req.body

  const result = await updateUser(saveUserName, data.password.trim())
  if (result) {
    res.status(200).send('User updated successfully')
  } else {
    res.status(404).send('User not found')
  }
})
