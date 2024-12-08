const User = require('./../Models/User')
const { getAllUsers, createDbUser, loginUser } = require('./../Models/UserManager')

jest.mock('./../Models/User')

describe('Tester mot databas', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Skapar en ny användare', async () => {
    const mockUser = true
    User.create.mockResolvedValueOnce(mockUser)

    // Kör funktionen och verifiera
    const result = await createDbUser('TestUser0', 'TestPassword0')
    expect(User.create).toHaveBeenCalledTimes(1)
    expect(User.create).toHaveBeenCalledWith({ username: 'TestUser0', password: 'TestPassword0' })
    expect(result).toBeTruthy()
  })

  test('Skapa en dublett användare', async () => {
    const mockUser = true
    User.create.mockResolvedValueOnce(mockUser)

    // Kör funktionen och verifiera
    const result = await createDbUser('SammaUserIgen', 'TestPassword')
    expect(User.create).toHaveBeenCalledTimes(1)
    expect(User.create).toHaveBeenCalledWith({ username: 'TestUser0', password: 'TestPassword0' })
    expect(result).toBeFalsy()
  })

  test('getAllUsers ska returnera alla användare', async () => {
    // Mockad respons för User.findAll
    const mockUsers = [
      { id: 1, username: 'TestUser1', password: 'TestPassword1' },
      { id: 2, username: 'TestUser2', password: 'TestPassword2' }
    ]
    User.findAll.mockResolvedValueOnce(mockUsers)

    // Kör funktionen och verifiera
    const result = await getAllUsers()
    expect(User.findAll).toHaveBeenCalledTimes(1)
    expect(result).toEqual(mockUsers)
  })

  test('getAllUsers ska hantera ett tomt resultat', async () => {
    // Mockad respons att databasen är tom
    User.findAll.mockResolvedValueOnce([])

    // Kör funktionen och verifiera
    const result = await getAllUsers()
    expect(User.findAll).toHaveBeenCalledTimes(1)
    expect(result).toEqual([])
  })

  test('loginUser loggar in på en testanvändare', async () => {
    const mockUser = [
      { id: 1, username: 'username', password: 'password' }
    ]
    // Mockad respons på User.findOne
    User.findOne.mockRejectedValueOnce(mockUser)

    // Kör funktionen och verifiera password
    const result = await loginUser('username', 'password')
    expect(User.findOne).toHaveBeenCalledTimes(1)
    expect(result).toBeTruthy()
  })
})
