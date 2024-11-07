const addNewProjectButton = '[aria-label="Dodaj projekt"]'

export const newProjectType = {
    addNewProject: function(){
        cy.get(addNewProjectButton).click()
    }
}