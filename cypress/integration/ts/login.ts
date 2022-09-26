/// <reference types="cypress" />


describe("E2E - user wants to login as an Admin ts", () => {
    it("Admin login", () => {
        cy.visit("/")
        cy.tsLogin('Admin', 'password')
        cy.contains("Login").click();
        cy.get(".css-sf913e")
            .find("p")
            .then(user => {
            expect(user).to.contain("admin")
        })
    })
})