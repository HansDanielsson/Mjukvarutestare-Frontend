const User = require('./../Models/User')
const { updateUser } = require('./../Models/UserDatabase')

jest.mock('./../Models/User.js')

describe('Tester mot selectPassword och updateUser', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  /*
    test('Test user password ok', async () => {
    const mockPassword = 'password'
    const mockUsers = [
      { id: 1, username: 'username', password: mockPassword }
    ]
    User.findOne.mockResolvedValueOnce(mockUsers)

    // Kör funktionen och verifiera
    const result = await selectPassword('username')
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(result).toBe(mockPassword)
  })
  */

  test('Update user password', async () => {
    const mockPassword = 'new_password'
    const mockUsers = [
      { id: 1, username: 'username', password: 'old_password' }
    ]
    User.update.mockResolvedValueOnce(mockUsers)

    // Kör funktionen och verifiera
    const result = await updateUser('username', mockPassword)
    expect(User.update).toHaveBeenCalledTimes(1)
    expect(result).toBeTruthy()
  })
})
