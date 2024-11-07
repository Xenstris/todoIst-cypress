import { myProjects } from "../pageObjects/myProjects";
import { newProjectType } from "../pageObjects/newProjectType";
import { projectEditFrom } from "../pageObjects/projectEditForm";
import { projectView } from "../pageObjects/projectView";
import { testData } from "../data/testData";

export const projectSteps = {
  createNewProject: function () {
    testData.defineProjectName();

    myProjects.clickPlusButton();
    newProjectType.addNewProject();
    projectEditFrom.fillProjectNameInput();
    projectEditFrom.submitProjectForm();
  },

  validateExistanceOfCreatedProject: function () {
    cy.get("@projectName").then((projectName) => {
      projectView.checkProjectName(projectName);
    });
  },

  validateProjectIsOnList: function () {
    cy.get("@projectId").then((id) => {
      cy.get("@projectName").then((projectName) => {
        myProjects.checkIfProjectListed(id, projectName);
      });
    });
  },
};
