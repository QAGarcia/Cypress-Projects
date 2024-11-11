describe('CEP', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    });

    it('Deve cadastrar um endereço consumindo a API dos Correios', () => {
        const address = {
            cep: '02067002',
            logradouro: 'Rua Chico Pontes',
            localidade: 'São Paulo',
            uf: 'SP'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('input[name="cep"]').type(address.cep)
        cy.contains('button', 'Cadastrar').click()

        cy.wait('@getCep')

        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', address.logradouro)

        cy.get('input[name="cidade"]', { timeout: 7000 })
            .should('have.value', address.localidade)

        cy.get('input[name="estado"]', { timeout: 7000 })
            .should('have.value', address.uf)
    });
});