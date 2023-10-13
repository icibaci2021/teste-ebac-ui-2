/// <reference types="cypress"/>

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    })
    it('Deve seecionar um rpoduto da lista', () => {
        //podemos colocar jogo da velha toda vez que for ID e colocar ponto, toda vez que for classe
        cy.get('[class="product-block grid"]')
            //usar para pegar o primeiro item da lista
            //.first()
            //usar para pegar o último item da lista
            //.last()
            // para pegar por exemplo o quarto item da lista, lembrando que sempre começamos a contagem pelo 0, então o primeiro item será o 0 (zero)
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('[class="variable-item button-variable-item button-variable-item-L selected"]').click()
        cy.get('[class="variable-item button-variable-item button-variable-item-Blue selected"]').click()
        //cy.get('[class="input-text qty text"]').clear().type(2)
        cy.get('[class="input-text qty text"]').clear().type(quantidade)
        cy.get('[class="single_add_to_cart_button button alt"]').click()
        //podemos deixar o campo de valor como variável
        //cy.get('[class="mini-cart-items"]').should('contain', 2)
        cy.get('[class="mini-cart-items"]').should('contain', quantidade)
        cy.get('[class="woocommerce-message"]').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho." ')
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () =>{
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 3)
    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () =>{
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', 5)
    });

});