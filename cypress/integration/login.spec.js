//Estrutura do teste autometizado:
//.Captura de elemento;
//.Inserir ação para o elemento;
//.Resultado esperado para o teste.

/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json') //usando arquivo de dados
const { afterEach } = require("mocha");


//const { beforeEach } = require("mocha")

context('Funcionalidade login', () => {

    //hocker - como o cy.visit url, é comum a todos os testes, inserimos o hocker beforeEach, para que antes de todos os cenários ele acesse primeiro a url
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    //hocker - pode ser usado para limpar cache, ou salvar prints dos testes.
    //afterEach(() => {
    //    cy.screenshot()
    //});

    it.only('Deve fazer login com sucesso', () => {
        //Captura e Ação do Elemento
        //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('paula.teste@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //Resultado esperado (assert)
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,') //podemos usar parte do texto que é apresentado, pois colocamos contain e não equal
    })

    it('Deve fazer login com sucesso - usando arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha), {log: false} //log:false é usado para que a senha não apareça na execução do teste
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    //Captura e Ação do Elemento
    //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('inválido@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    //Resultado esperado (assert)
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
})

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    //Captura e Ação do Elemento
    //cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('senhainvalida')
    cy.get('.woocommerce-form > .button').click()
    //Resultado esperado (assert)
    cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail')
})
})