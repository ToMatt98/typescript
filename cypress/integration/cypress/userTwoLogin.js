/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - user wants to login on user_two account", () => {
    it("User_two login", () => {
        action.user_two();
        action.clickOnBtnLogin();
        cy.get(".css-sf913e").find("p").then(user => {
            expect(user).to.contain("user_two")
        })
    })
})