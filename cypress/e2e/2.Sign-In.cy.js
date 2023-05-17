Cypress.on('uncaught:exception', () => {
	return false})

describe('Sign In', () => {
	beforeEach('Visit the Page', () => {
		cy.visit(Cypress.env('url'), { failOnStatusCode: false })
	})

    it('TC 03 | Successful Login', () => {
		cy.contains('Welcome').should('be.visible')						//The UI shows a modal, welcoming and giving the option to read the terms and conditions
		cy.fixture('SignIn').then((the) => {
			cy.get(the.accept).click()									//Click on Got it button
			cy.get(the.signin).click()									//Click on the sign in button (after that, login options are displayed)
			cy.get(the.login).click()									//Click on the sign in button to Log in with phone or email
			cy.get(the.username).type('demo2@spam4.me')					//Type the username
			cy.get(the.password).type('Gabo1234')						//Type the password
			cy.get(the.rememberMe).click()								//Click the remember checkbox
			cy.get(the.submit).click()})								//Click on the submit button
		cy.contains('bonus', { timeout: 8000 }).should('be.visible')	//The UI shows in the upper bar a card with the amount of bonus
	})
})