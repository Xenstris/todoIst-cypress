const URLInputLoginPage = 'https://app.todoist.com/auth/login'
const URLInputMainPage = 'https://app.todoist.com/app/'
    
const glass = '#loading'

const sessionCookie = 'todoistd'

export const todoistApp = {
    navigateToLoginPage: function() {
        cy.visit(URLInputLoginPage)
    },

    navigateToMainPage: function() {
        cy.visit(URLInputMainPage)
    },

    waitForGlassToClose: function(){
        cy.get(glass).should('be.visible');
        cy.get(glass).should('not.be.visible');
    },

    checkIfSessionCookieExists: function() {
        cy.get(sessionCookie).should('exist')
    }
}