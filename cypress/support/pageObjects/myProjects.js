const myProjectsMenuButton = '[aria-label="Menu Moje projekty "]'
const projectList = '#projects_list'
const projectItems = '#projects_list li'


export const myProjects = {
  clickPlusButton: function () {
    cy.get(myProjectsMenuButton).click()
  },

  checkIfProjectListed: function (projectId, projectName) {
    //option1
    cy.get(projectItems).should('contain.text', projectName)

    //option2
    let todos = []
    cy.get(projectItems).each( ($todo) => {
      todos.push($todo.text())
    })
    cy.wrap(todos).should('include', projectName)

    //option3 - best
    cy.get(projectList).find(`[data-id="${projectId}"]`).should('have.text', projectName)
  },

}