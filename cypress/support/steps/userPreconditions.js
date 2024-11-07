import { loginSteps } from "./loginSteps";
import { todoistApp } from "../pageObjects/todoistApp";
import { testData } from "../data/testData";

export const userPreconditions = {
  isLoggedIn: function () {
    cy.session("user", () => {
      loginSteps.visitPage();
      loginSteps.enterUsersCredentials();
    });
    todoistApp.navigateToMainPage();
  },

  hasCreatedProject: function () {
    this.isLoggedIn();
    // projectSteps.createNewProject()
    testData.defineProjectName();

    cy.get("@projectName").then((projectName) => {
      cy.request({
        method: "POST",
        url: "https://api.todoist.com/rest/v2/projects",
        body: { name: projectName },
      }).then((resp) => {
        cy.visit(resp.body.url);
        cy.wrap(resp.body.id).as("projectId");
      });
    });
  },
};
