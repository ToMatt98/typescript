/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - user wants to login on admin account", () => {
    it("Admin login", () => {
        action.admin();
        action.clickOnBtnLogin();
        cy.get(".css-sf913e").find("p").then(user => {
            expect(user).to.contain("admin")
        })
    })
})