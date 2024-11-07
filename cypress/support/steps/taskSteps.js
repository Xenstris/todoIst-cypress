/// <reference types="cypress" />

import { projectView } from "../pageObjects/projectView";
import { taskEditFrom } from "../pageObjects/taskEditFrom";
import { testData } from "../data/testData";

export const taskSteps = {
  creatNewTask: function () {
    testData.definetaskName();

    projectView.addTask();
    cy.get("@taskName").then((taskName) => {
      taskEditFrom.fillTaskName(taskName);
    });
    taskEditFrom.submitTask();
  },

  validateExistanceOfCreatedTask: function () {
    cy.get("@taskName").then((taskName) => {
      projectView.checkCreateTaskOnList(taskName);
    });
  },
};
