const newProjectNameInput = '#edit_project_modal_field_name'
const newProjectForm = '.edit_project_modal__form'

export const projectEditFrom = {

    fillProjectNameInput: function(){
        cy.get('@projectName').then( (projectName) => {
            cy.get(newProjectNameInput).type(projectName)
        })
    },

    submitProjectForm: function(){
        cy.get(newProjectForm).submit()
    }

}