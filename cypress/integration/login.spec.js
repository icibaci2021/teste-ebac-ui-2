//Estrutura do teste autometizado:
//.Captura de elemento;
//.Inserir ação para o elemento;
//.Resultado esperado para o teste.

/// <reference types="cypress"/>

context('Funcionalidade login', () => {

    it('Deve fazer login com sucesso', () => {
        //Captura e Ação do Elemento
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //Resultado esperado (assert)
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,') //podemos usar parte do texto que é apresentado, pois colocamos contain e não equal
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        //Captura e Ação do Elemento
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('inválido@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        //Resultado esperado (assert)
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        //Captura e Ação do Elemento
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('senhainvalida')
        cy.get('.woocommerce-form > .button').click()
        //Resultado esperado (assert)
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail')
    })
})