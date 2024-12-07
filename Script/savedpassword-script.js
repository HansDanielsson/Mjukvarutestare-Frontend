const { selectPassword } = require('./../Models/UserDatabase')

document.getElementById('btnpassword').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = await selectPassword(username)

  // Generera meddelandet
  const message = `${username} har password: ${password}`

  // Posta meddelandet på html sidan
  document.getElementById('savedpassword').innerText = message
})