/// <reference types="cypress" />

describe("E2E - Home Page", () => {
    it("Should open basic website", () => {
        cy.visit("/")
    })
})