/// <reference types="cypress" />

describe("E2E - admin wants to add book", () => {
    it("Admin login", () => {
        cy.visit("/")
        cy.tsLogin('Admin', 'password')
        cy.contains("Login").click();
    })

    it("Adding book", () => {
        cy.contains("Library").click();
        cy.contains("Add book").click();
        cy.newBook("xTitle Lord of The Rings", "J.R.R. Tolkien")
    })
})

describe("E2E - Check if created book exist", () => {
    it("Check", () => {
        cy.contains("Library").click();
        cy.get('tbody tr td p').contains("", "xTitle Lord of The Rings")
    })
})

