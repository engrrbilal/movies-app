/* eslint-disable no-undef */
// init.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Welcome Screen', () => {
  beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000');
  });

  it('have desc text ', () => {
    const desc = 'Lets start building a beautiful application.';
    cy.get('[data-cy=description]').should('have.html', desc);
  });

  it('rtl working ', () => {
    cy.get('[data-cy=ur-btn]').click();
    cy.get('[data-cy=welcome-text]').should('include.html', 'میں خوش آمدید');
  });
});
