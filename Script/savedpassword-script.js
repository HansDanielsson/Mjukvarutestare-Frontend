const { selectPassword } = require('./../Models/UserDatabase')

async function getSelectPW () {
  const username = document.getElementById('username').value;
  const password = await selectPassword(username)

  // Generera meddelandet
  const message = `${username} har password: ${password}`

  // Posta meddelandet på html sidan
  document.getElementById('savedpassword').innerText = message;

}

document.getElementById('btnpassword').addEventListener('click', async () => {
  await getSelectPW()
})