const cypress = require("cypress");

Cypress.command.add('login', (nome, senha) => {
        cy.get('input[formcontrolname="userName"]').type(nome);
        cy.get('input[formcontrolname="password"]').type(senha);
        cy.contains('button[type="submit"]').click();
})