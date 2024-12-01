// Fil för attt hantera Express server
const express = require('express')
const bodyParser = require('body-parser')

const portNr = 5000

// Konfigurera server med Body-parser
const application = new express()
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
