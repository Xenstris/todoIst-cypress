const emailInput = '#element-0'
const passwordInput = '#element-3'
const form = 'form'

export const loginForm = {
    enterEmail: function(email) {
        cy.get(emailInput).type(email)
    },

    enterPass: function(password) {
        cy.get(passwordInput).type(password)
    },

    submitForm: function() {
        cy.get(form).submit()
    }
}