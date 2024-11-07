/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

var env = 'local'

export const testData = {
    defineProjectName: function() {
        let projectName

        if ( env == 'local'){
            projectName = faker.commerce.productName()
        }
        else if ( env == "uat") {
            //take data from db
        }

        cy.wrap(projectName).as('projectName')
    },

    definetaskName: function() {
        let taskName = faker.animal.dog()
        cy.wrap(taskName).as('taskName')
    }
}