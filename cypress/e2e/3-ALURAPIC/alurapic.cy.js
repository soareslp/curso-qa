describe('Login e registro de usuários no AluraPic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
        cy.contains('ap-vmessage','Full name is required!').should('be.visible');
    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('lucas');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens de full name poucos caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="fullName"]').type('l');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 2').should('be.visible');
    })

    it('verifica mensagens de user name poucos caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('l');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 2').should('be.visible');
    })

    it('verifica mensagens de password poucos caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('l');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
    })

    it('verifica usuario ja criado', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Username already taken').should('be.visible');
    })

    it('verifica usuario maiúsculas', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('LUCAS');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Must be lower case').should('be.visible');
    })
})