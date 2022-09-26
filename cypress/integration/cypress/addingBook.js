/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - admin wants to add book", () => {
    it("Admin login", () => {
        action.admin();
        action.clickOnBtnLogin();
    })

    it("Adding book", () => {
        action.clickOnTabLibrary();
        action.clickOnBtnAddBooks();
        cy.get('[name="title"]').type('xTitle Lord of The Rings',{delay: 200})
        cy.get('[name="author"]').type('J.R.R. Tolkien',{delay: 200})
        action.clickOnBtnOk();
        
    })
})

// MUSI BYĆ NOWE DESCRIBE, INACZEJ TYTUŁ NIE ZOSTANIE ZNALEZIONY ZA PIERWSZYM RAZEM!

describe("E2E - Check if created book exist", () => {
    it("Check", () => {
        action.clickOnTabLibrary();
        cy.get('tbody tr td p').contains("", "xTitle Lord of The Rings")
    })
})

