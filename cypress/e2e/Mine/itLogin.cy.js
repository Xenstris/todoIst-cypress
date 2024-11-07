/// <reference types="cypress" />

import { userSteps } from "../../support/steps/userSteps";
import { todoistApp } from "../../support/pageObjects/todoistApp";
import { loginForm } from "../../support/pageObjects/loginForm";

describe("Integration test for Login", () => {
  before(() => {
    todoistApp.navigateToLoginPage();
    loginForm.enterEmail("oki@wp.pl");
    loginForm.enterPass("pass124");
  });

  it("Verify 401", () => {
    cy.fixture("login401resp.json").then((resp) => {
      cy.intercept("https://app.todoist.com/api/v9.1/user/login", resp);
    });
    loginForm.submitForm();
  });

  it("Verify 500", () => {
    cy.fixture("login500resp").then((resp) => {
      cy.intercept("https://app.todoist.com/api/v9.1/user/login", resp);
    });
    loginForm.submitForm();
  });
});
