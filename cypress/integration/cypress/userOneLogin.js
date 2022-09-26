/// <reference types="cypress" />

import action from "../cypress/startHere";

describe("E2E - user wants to login on user_one account", () => {
    it("User_one login", () => {
        action.user_one();
        action.clickOnBtnLogin();
        cy.get(".css-sf913e").find("p").then(user => {
            expect(user).to.contain("user_one")
        })
    })
})