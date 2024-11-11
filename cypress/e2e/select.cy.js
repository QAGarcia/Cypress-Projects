describe('Select', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve selecionar as linguagens que usam Node.js', () => {
        cy.get('input[placeholder^="Linguagens de programação"')
            .click()

        cy.itemList(['JavaScript', 'TypeScript'])
    })

    it('Deve escolher todas as linguagens', () => {
        cy.get('input[placeholder^="Linguagens de programação"')
            .click()

        cy.itemList(['JavaScript', 'TypeScript', 'Python', 'C\\+\\+', 'Java', 'C#', 'Ruby', 'PHP', 'Go', 'Rust'])

    })
})