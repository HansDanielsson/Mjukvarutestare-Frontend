const User = require('./../Models/User')
const { selectPassword, updateUser } = require('./../Models/UserDatabase')

jest.mock('./../Models/User.js')

describe('Tester mot selectPassword och updateUser', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Get password to NoUserName', async () => {
    User.findOne.mockResolvedValueOnce(false)

    // Kör funktionen och verifiera
    const result = await selectPassword('NoUserName')
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(result).toBeFalsy()
  })

  test('Update user password', async () => {
    User.update.mockResolvedValueOnce(true)

    // Kör funktionen och verifiera
    const result = await updateUser('username', 'NewPassword')
    expect(User.update).toHaveBeenCalledTimes(1)
    expect(result).toBeTruthy()
  })
})
