describe('Given a malandra meme page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.title().should('equal', 'CypressLog');
  });

  it('Should render the header', () => {
    cy.get('.header-malandro').should('have.text', 'Header bien malandro');
  });

  describe('When we register a user', () => {
    it('Should render the register form and register a user correctly', () => {
      // Se entra al componente de register
      const register = cy.get('.register');
      register.click();
      cy.url().should('include', '/register');

      // Se buscan los inputs del formulario
      const userName = cy.get('#userName');
      const email = cy.get('#email');
      const password = cy.get('#password');

      // Se escriben los valores para el registro
      userName.type('Rigoberto');
      email.type('rigo@berto.com');
      password.type('12345');
    });
  });

  describe('When we log the user we just registered', () => {
    it('Should render the login form and log correctly', () => {
      cy.get('.login').click();
      cy.url().should('include', '/login');

      cy.get('#user').type('pepe');
      cy.get('#password').type('12345');
      cy.get('#user').should('have.value', 'pepe');
      cy.get('.submit').click();
    });
  });
});
