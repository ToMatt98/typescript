/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - checks if user is able to rent books", () => {
    it("Renting book", () => {
        action.user_one();
        action.clickOnBtnLogin();
        action.clickOnTabLibrary();
        cy.get('[role="row"]').find('[aria-label="Rent book"]').eq(0).click()
    })
})

describe("E2E - Check if created book exist", () => {
    it("Check", () => {
        action.clickOnTabMyBooks();
        cy.get('tbody tr td p').contains("", "The power of tea")
        cy.pause();
        // Resume tests on website
        cy.get('[role="row"]').find('[aria-label="Rent book"]').eq(0).click()
    })
})