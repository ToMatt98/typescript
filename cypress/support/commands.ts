// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add('tsLogin', (username, password) => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.contains("Login").click();
})

Cypress.Commands.add('newBook', (title, author) => {
    cy.get('[name="title"]').type(title);
    cy.get('[name="author"]').type(author);
    cy.contains("Ok").click();
})
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
