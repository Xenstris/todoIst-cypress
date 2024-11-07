/// <reference types="cypress" />

import { projectSteps } from "../../support/steps/projectSteps";
import { userPreconditions } from "../../support/steps/userPreconditions";

describe("Project actions", () => {
  it("User can create new project", () => {
    userPreconditions.isLoggedIn();
    projectSteps.createNewProject();
    projectSteps.validateExistanceOfCreatedProject();
  });

  it("Created project is added to all projects list", () => {
    userPreconditions.hasCreatedProject();
    projectSteps.validateProjectIsOnList();
  });
});
