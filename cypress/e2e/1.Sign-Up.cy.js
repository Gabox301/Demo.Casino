Cypress.on('uncaught:exception', () => {
	return false})

describe('Sign Up', () => {
	beforeEach('Visit the Page', () => {
		cy.visit(Cypress.env('url'), { failOnStatusCode: false })
	})

	it.only('TC 01 | Sign Up with Email', () => {
		cy.contains('Welcome').should('be.visible')		//The UI shows a modal, welcoming and giving the option to read the terms and conditions
		cy.fixture('SignUp').then((the) => {
			cy.get(the.accept).click()					//Click on Got it button
			cy.get(the.signup).click()					//Click on the sign up button
			cy.get(the.email).type('demo8@spam4.me')	//Type the email
			cy.get(the.terms).click()					//Accept the terms and conditions
			cy.get(the.coin).click()					//Click on the coins dropdown
			cy.get(the.mDOGE).click()					//Select the Doge option
			cy.get(the.password).type('Gabo1234')		//Type de password
			cy.get(the.confirm).type('Gabo1234')		//Confirm the password
			cy.get(the.noBonus).click()})				//Select the no bonus option
		cy.contains('Create').click()					//Click on the create button
		cy.contains('Registration successfully finished!', { timeout: 8000 }).should('be.visible')
		//The UI show a message indicating that the registration was successful
	})

	it('TC 02 | Registration Attempt Without Email', () => {
		cy.contains('Welcome').should('be.visible')		//The UI shows a modal, welcoming and giving the option to read the terms and conditions
		cy.fixture('SignUp').then((the) => {
			cy.get(the.accept).click()					//Click on Got it button
			cy.get(the.signup).click()					//Click on the sign up button
			cy.get(the.terms).click()					//Accept the terms and conditions
			cy.get(the.coin).click()					//Click on the coins dropdown
			cy.get(the.mDOGE).click()					//Select the Doge option
			cy.get(the.password).type('Gabo1234')		//Type de password
			cy.get(the.confirm).type('Gabo1234')		//Confirm the password
			cy.get(the.noBonus).click()})				//Select the no bonus option
		cy.contains('Create').click()					//Click on the create button
		cy.contains('Email or phone number is required.').should('be.visible')
		//The input of the email show a message indicating the requirement
	})
})
