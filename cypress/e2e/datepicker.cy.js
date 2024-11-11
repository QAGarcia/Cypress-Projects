describe('Datepicker', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Novembro')

        cy.get('input[aria-label="Year"]')
            .type('1992')

        cy.get('span[aria-label="Novembro 14, 1992"]')
            .click()
    })

})