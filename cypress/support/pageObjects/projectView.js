const projectHeader = '[data-testid="large-header"]'
const addTaskButton = '[class="plus_add_button"]'
const taskContent = '.task_content'

export const projectView = {
    checkProjectName: function(){
        cy.get('@projectName').then( (projectName) => {
            cy.get(projectHeader).should('have.text', projectName)
        })
    },

    addTask: function(){
        cy.get(addTaskButton).click()
    },

    checkCreateTaskOnList: function(taskName){
        cy.get(taskContent).should('contain', taskName)
    }
}