/// <reference types="cypress" />

import action from "./startHere";

describe("E2E - check if bar contains all pages for user  ", () => {
    it("User check", () => {
        action.user_one();
        action.clickOnBtnLogin();
    })

    it("Bar check", () => {
        cy.get(".css-k008qs").then(bar => {
            expect(bar).to.contain("Welcome"),
            expect(bar).to.contain("Library"),
            expect(bar).to.contain("My books")
        })
    })
})