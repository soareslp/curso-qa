describe('Login usuários no AluraPic', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('login com usuário criado automático', () => {
        cy.login('lps_soares', '12345678');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login de usuário inválido', () => {
        cy.login('jaqueline', '1234');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
})