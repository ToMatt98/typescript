declare namespace Cypress {
    interface Chainable {
        tsLogin: (username:string, password:string) => void;
        newBook: (title:string, author:string) => void;
    }
}