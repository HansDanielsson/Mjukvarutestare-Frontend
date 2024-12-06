const User = require('./../Models/User')
const { getAllUsers, createDbUser } = require('./../Models/UserManager')

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
    expect(result).toEqual(mockUser)
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
    // Mockad att databasen är tom
    User.findAll.mockResolvedValueOnce([])

    // Kör funktionen och verifiera
    const result = await getAllUsers()
    expect(User.findAll).toHaveBeenCalledTimes(1)
    expect(result).toEqual([])
  })

  test('createDbUser ska hantera fel vid databasoperation', async () => {
    // Mockad ett fel från User.create
    User.create.mockRejectedValueOnce(new Error('Database error X'))

    // Kör funktionen och verifiera att den kastar ett fel
    await expect(createDbUser('TestUserX', 'TestUserX@example.se')).rejects.toThrowError('Database error X')
    expect(User.create).toHaveBeenCalledTimes(1)
  })
})
