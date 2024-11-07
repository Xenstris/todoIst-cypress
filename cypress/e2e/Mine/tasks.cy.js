/// <reference types="cypress" />

import { userPreconditions } from "../../support/steps/userPreconditions";
import { taskSteps } from "../../support/steps/taskSteps";

describe("Tasks actions", () => {
  it("User can add task to existing project", () => {
    userPreconditions.hasCreatedProject();
    taskSteps.creatNewTask();
    taskSteps.validateExistanceOfCreatedTask();
  });
});
