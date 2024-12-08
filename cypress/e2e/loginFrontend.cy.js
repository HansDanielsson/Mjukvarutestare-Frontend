describe('Tester mot hemsidan', () => {
  beforeEach(() => {
    cy.visit('/')   // Öppna hemsidan
  })
  it('register User', () => {
    cy.wait(1000)
    cy.get('h1').should('contains.text', 'Welcome to Frontend Homepage')
    cy.wait(1000)
    cy.get('#username').type('NewUsername')
    cy.wait(1000)
    cy.get('#password').type('NewPassword')
    cy.wait(1000)
    cy.get('#register').click()
    cy.wait(1000)
  })

  it('Loggin User', () => {
    // Logga in med NewUsername och NewPassword
    cy.wait(1000)
    cy.get('#username').type('NewUsername')
    cy.wait(1000)
    cy.get('#password').type('NewPassword')
    cy.wait(1000)
    cy.get('#login').click()
    cy.wait(1000)
    cy.get('h1').should('contains.text', 'Welcome to Vip User Page')
    cy.wait(1000)
    // Verifiera att lösenordet visas
    cy.get('#savedpassword').should('contain.text', 'NewUsername har password: NewPassword')
    cy.wait(1000)
    // Logga ut
    cy.get('#logout').click()
    cy.wait(1000)
    // Verifiera att logga ut lyckats
    cy.get('#login').should('contain.text', 'Logga in')
  })
})
