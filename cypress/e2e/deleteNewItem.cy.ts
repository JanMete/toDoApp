describe('Delete new item', () => {
  it('Delete new item', () => {
    const todoName = 'Test Todo';
    cy.visit('http://localhost:5173/');
    cy.get('button').click();
    cy.get('form').type(todoName);
    cy.get('form').submit();
    cy.get('li').should('have.length.gt', 0);
    cy.get('li')
      .contains(todoName)
      .parent()
      .find('button')
      .contains('Usuń')
      .click();
    cy.get('li').should('have.length', 0);
  });
});
