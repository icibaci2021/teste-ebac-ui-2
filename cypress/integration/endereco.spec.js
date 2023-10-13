/// <reference types="cypress" />

describe('Funcionalidade endereços - faturamento e entrega' () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        //cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        //login, criamos um comando para realizar o login antes do teste no Support > commands.js
        //cadastro de endereço
    })
});