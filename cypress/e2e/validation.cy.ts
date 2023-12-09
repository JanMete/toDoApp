describe('Validation', () => {
  it('Validation', () => {
    cy.visit('http://localhost:5173/');
    cy.get('button').click();
    cy.get('form').should('exist');
    cy.get('[data-test="errorDiv"]').should('not.exist');
    cy.get('form').submit();
    cy.get('[data-test="errorDiv"]').should('exist');
    cy.get('[data-test="errorDiv"]').should(
      'contain.text',
      'Zadanie nie może być puste!'
    );
    cy.wait(2000);
    cy.get('[data-test="errorDiv"]').should('not.exist');
  });
});
