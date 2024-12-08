const User = require('./../Models/User')
const { selectPassword, updateUser } = require('./../Models/UserDatabase')

jest.mock('./../Models/User.js')

describe('Tester mot selectPassword och updateUser', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Get password to UserName', async () => {
    const mockPassword = 'password'
    User.findOne.mockResolvedValueOnce({ password: mockPassword })

    // Kör funktionen och verifiera
    const result = await selectPassword('UserName')
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(result).toBe(mockPassword)
  })

  test('Get password to NoUserName', async () => {
    User.findOne.mockResolvedValueOnce(false)

    // Kör funktionen och verifiera
    const result = await selectPassword('NoUserName')
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(result).toBeFalsy()
  })

  test('Get password to NoUserName', async () => {
    // Mockad ett fel från User.findOne
    User.findOne.mockRejectedValue(new Error('Databasfel'))

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

  test('Update NoUser password', async () => {
    // Mockad ett fel från User.update
    User.update.mockRejectedValue(new Error('Databasfel'))

    // Kör funktionen och verifiera
    const result = await updateUser('NoUserName', 'NewPassword')
    expect(User.update).toHaveBeenCalledTimes(1)
    expect(result).toBeFalsy()
  })
})
