describe('App', () => {
  it('Render successfully', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').should('contain.text', 'Do zrobienia');
    cy.get('h2').should('contain.text', 'Brak zadań');
    cy.get('button').should('contain.text', '+');
    cy.get('form').should('not.exist');
    cy.get('[data-test="emptyError"]').should('not.exist');
  });
});
