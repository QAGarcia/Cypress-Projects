describe('Input Fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    });

    it('Deve preencher o campo texto', () => {
        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('[data-cy="fullname"]')
            .type('Vinícius Garcia')

        cy.get('[data-cy="email"]')
            .type('teste@teste.com')

        cy.get('[data-cy="number"]')
            .type('2024')

        cy.get('[data-cy="date"]')
            .type('2024-10-28')
    });

});