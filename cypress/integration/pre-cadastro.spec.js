/// <reference types="cypress"/>
var faker = require('faker'); //biblioteca do node - variavel

context('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailFaker = faker.internet.email(nameFaker)
        let nameFaker = faker.name.firstName()
        let lastNameFaker = faker.name.lastName()
        //opções para gerar massa de teste automática
        //por ter valor numérico, poderia criar uma função JS para alterar os números a cada teste rodado;
        //poderia puxar a massa de dados de um arquivo externo do tipo Json, txt, banco de dados, ou usar uma biblioteca do node para gerar essa massa de dados dinâmicamente
        //USANDO BIBLIOTECA DO NODE - no Google buscar por npm faker, após isso abrir novo terminal dentro do projeto e dar o comando <npm i @faker-js/faker> ele será instalado e aparecerá na pasta package.json, inserir a variável no inicio do código e substituir o email pela variável;
        //cy.get('#reg_email').type('testepaula01@teste.com')
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        //cy.get('#account_first_name').type('Paula')
        cy.get('#account_first_name').type(nameFaker)
        //cy.get('#account_last_name').type('Midori')
        cy.get('#account_last_name').type(lastNameFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });
    
});