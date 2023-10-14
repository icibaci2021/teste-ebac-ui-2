/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page"; //pasta criada dentro de Support > page-objects > enderecopage.js
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach( () => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
        //cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        //login, criamos um comando para realizar o login antes do teste no Support > commands.js
        //cadastro de endereço
        enderecoPage.editarEnderecoFaturamento('Bruno', 'Mars', 'EBAC', 'Brasil', 'Rua Paulista', '1001', 'Sao Paulo', 'SP', '03120-100', '1198888-7777', 'mars@templateSettings.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            )
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

});