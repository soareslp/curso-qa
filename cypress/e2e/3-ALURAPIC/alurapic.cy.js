const { it } = require("mocha");

describe('Usabilidade ', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('verifica mensagem tela inicial', () => {
        cy.contains('h4', 'Login').should('be.visible')
    })
})