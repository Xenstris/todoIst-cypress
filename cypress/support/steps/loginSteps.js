import { loginForm } from "../pageObjects/loginForm"
import { todoistApp } from "../pageObjects/todoistApp"

const userEmail = 'zgv35798@vogco.com'
const userPass = 'haslo123'

export const loginSteps = {

    visitPage: function() {
        todoistApp.navigateToLoginPage()
    },

    enterUsersCredentials: function() {
        loginForm.enterEmail(userEmail)
        loginForm.enterPass(userPass)
        loginForm.submitForm()
        todoistApp.waitForGlassToClose()
    },

    checkIfIsLoggedIn: function(){
        todoistApp.checkIfSessionCookieExists()
    },
}