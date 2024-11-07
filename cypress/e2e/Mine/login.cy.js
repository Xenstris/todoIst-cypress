/// <reference types="cypress" />

import { userSteps } from "../../support/steps/userSteps";

describe("User can log in", () => {
  it("Sucessfully logged", () => {
    userSteps.visitPage();
    userSteps.enterUsersCredentials();
  });
});
