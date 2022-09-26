/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - admin wants to delete book", () => {
    it("Delete book (xTitle Lord of The Rings)", () => {
        action.admin();
        action.clickOnBtnLogin();
    })

    it("Deleting book", () => {
        action.clickOnTabLibrary();
        cy.get('[role="row"]').find('[aria-label="Delete book"]').eq(0).click()
        action.clickOnBtnOk();
    })
})