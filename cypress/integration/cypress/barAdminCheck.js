/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - check if bar contains all pages for admin", () => {
    it("Admin check", () => {
        action.admin();
        action.clickOnBtnLogin();
    })

    it("Bar check", () => {
        cy.get(".css-k008qs").then(bar => {
            expect(bar).to.contain("Welcome"),
            expect(bar).to.contain("Library")
        })
    })
})