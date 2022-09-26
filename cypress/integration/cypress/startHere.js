class action {
    admin()  {
        cy.visit("/")
        cy.get('[name="username"]').type('admin', {delay: 200})
        cy.get('[name="password"]').type('password', {delay: 200})
    }
    user_one() {
        cy.visit("/")
        cy.get('[name="username"]').type('user_one', {delay: 200})
        cy.get('[name="password"]').type('password', {delay: 200})
    }
    user_two() {
        cy.visit("/")
        cy.get('[name="username"]').type('user_two', {delay: 200})
        cy.get('[name="password"]').type('password', {delay: 200})
    }
    clickOnBtnLogin() {
        cy.contains("Login").click();
    }
    clickOnTabLibrary() {
        cy.contains("Library").click();
    }
    clickOnTabMyBooks() {
        cy.contains("My books").click();
    }
    clickOnBtnAddBooks() {
        cy.contains("Add book").click();
    }
    clickOnBtnOk() {
        cy.contains("Ok").click();
    }
    clickOnBtnCancel() {
        cy.contains("Cancel").click();
    }

}

export default new action();