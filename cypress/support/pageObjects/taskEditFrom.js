const nameTaskTextBox = '[data-placeholder="Nazwa zadania"]'
const addTaskButton = '[aria-label="Dodaj zadanie"]'

export const taskEditFrom = {
    fillTaskName: function(){
        cy.get('@taskName').then( (taskName) => {
            cy.get(nameTaskTextBox).type(taskName)
        })
    },

    submitTask: function(){
        cy.get(addTaskButton).click()
    }
}