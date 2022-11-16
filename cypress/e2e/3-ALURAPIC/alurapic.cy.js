import { it } from "mocha";

describe('Login e registro de usuários no AluraPic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
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

    it('login de usuário válido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login de usuário inválido', () => {
        cy.login('jaqueline', '1234');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('registro de usuário automatizado', () => {
        cy.registro('lucas@gmail', 'Lucas Soares', 'lps_soaress', '12345678');
        cy.login('lps_soares', '12345678');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('login com usuário criado automático', () => {
        cy.login('lps_soares', '12345678');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it.only(`registro por carga de usuário ${usuario.fullName}`, () => {
            cy.registro(usuario.email, usuario.fullName, usuario.userName, usuario.password);
        })
    })
    
})