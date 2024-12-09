describe('Tester mot hemsidan', () => {
  beforeEach(() => {
    cy.visit('/') // Öppna hemsidan
    cy.wait(1000)
    cy.get('h1').should('contains.text', 'Welcome to Frontend Homepage')
    cy.wait(1000)
  })

  it('Register User X', () => {
    cy.get('input[type="text"]').type('NewUsername')
    cy.wait(1000)
    cy.get('input[type="password"]').type('NewPassword')
    cy.wait(1000)
    cy.get('button').contains('Register User').click()
  })

  it('Loggin User X -> Y', () => {
    // Logga in med NewUsername och NewPassword
    cy.get('input[type="text"]').type('NewUsername')
    cy.wait(1000)
    cy.get('input[type="password"]').type('NewPassword')
    cy.wait(1000)
    cy.get('button').contains('Login User').click()
    cy.wait(1000)
    // Verifiera att lösenordet fungerar
    cy.get('h1').should('contains.text', 'Welcome to Vip User Page')
    cy.wait(1000)
    cy.get('input[type="password"]').type('ModifyPassword')
    cy.wait(1000)
    cy.get('button').contains('Update password').click()
    // Antagan att ändra password fungerade bra
  })

  it('Loggin User Y -> X', () => {
    // Logga in med NewUsername och NewPassword
    cy.get('input[type="text"]').type('NewUsername')
    cy.wait(1000)
    cy.get('input[type="password"]').type('ModifyPassword')
    cy.wait(1000)
    cy.get('button').contains('Login User').click()
    cy.wait(1000)
    // Verifiera att lösenordet fungerar
    cy.get('h1').should('contains.text', 'Welcome to Vip User Page')
    cy.wait(1000)
    cy.get('input[type="password"]').type('NewPassword')
    cy.wait(1000)
    cy.get('button').contains('Update password').click()
    // Antagan att ändra password fungerade bra
  })

  it('Loggin User X', () => {
    // Logga in med NewUsername och NewPassword
    cy.get('input[type="text"]').type('NewUsername')
    cy.wait(1000)
    cy.get('input[type="password"]').type('NewPassword')
    cy.wait(1000)
    cy.get('button').contains('Login User').click()
    cy.wait(1000)
    // Verifiera att lösenordet fungerar
    cy.get('h1').should('contains.text', 'Welcome to Vip User Page')
    // Antagan att password fungerade bra
  })
})
