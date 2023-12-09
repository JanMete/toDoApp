describe('Add new item', () => {
  it('Add new item', () => {
    const todoName = 'Test Todo';
    cy.visit('http://localhost:5173/');
    cy.get('button').click();
    cy.get('input').should('be.empty');
    cy.get('form').type(todoName);
    cy.get('form').submit();
    cy.get('form').should('not.exist');
    cy.get('li').should('have.length.gt', 0);
  });
});
