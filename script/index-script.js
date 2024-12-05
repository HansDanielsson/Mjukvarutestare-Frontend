const { createUser, getAllUsers } = require('../Database/dbUserDatabase')
const syncDatabase = require('../Database/dbSync');

(async () => {
  await syncDatabase() // För att synka databasen med vår modell
  // Skapa en ny användare
  const user = await createUser('Test1', 'password1') // Anropa vår ServiceKlass för att lägga till ny användare
  console.log('Ny användare skapad:', user.toJSON())

  // Hämta alla användare
  const users = await getAllUsers() // Anropa vår Serviceklass för att hämta alla användare
  console.log('Alla användare:', users.map((u) => u.toJSON()))
})()
