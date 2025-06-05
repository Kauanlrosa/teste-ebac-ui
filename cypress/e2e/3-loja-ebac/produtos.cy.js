/// <reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

        it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });


        it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)

    });

        it('Deve visitar a pagina do produto', () => {
            produtosPage.visitarProduto('Zeppelin Yoga Pant')
            cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')

    });


    it.only('Deve adicionar o produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('L', 'Purple', qtd)

        cy.get('.woodcommerce').should('contain', qtd+ ' x “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

    });
       
    });

