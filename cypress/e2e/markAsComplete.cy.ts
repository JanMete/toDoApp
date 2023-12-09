describe('Mark Todo as Done', () => {
  it('marks a todo as done', () => {
    const todoName = 'Test Todo';
    cy.visit('http://localhost:5173/');
    cy.get('button').click();
    cy.get('input').type(todoName);
    cy.get('form').submit();
    cy.get('li')
      .contains(todoName)
      .parent()
      .find('button')
      .contains('Zrobione')
      .click();
    cy.get('li')
      .contains(todoName)
      .should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)');
  });
});
