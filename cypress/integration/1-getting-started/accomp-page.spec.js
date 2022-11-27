/// <reference types='cypress'/>

describe('accomp page', () => {
  beforeEach(() => {
    cy.visit('/accomplishments');
  });

  it('should showcase error if information is missing', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('Some text title');

    cy.get('[data-cy="accomplishment-input"]').type('Some text description');

    cy.contains('Submit Accomplishment').click();

    cy.contains('Complete the items above to continue').should('be.visible');
  });

  it('should showcase error if information is missing', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('Some text title');

    cy.get('[data-cy="accomplishment-input"]').type('Some text description');

    cy.contains('Submit Accomplishment').click();

    cy.contains('Complete the items above to continue').should('be.visible');
  });

  it('should display validation component if all information is valid', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('Some text title');

    cy.get('[data-cy="accomplishment-input"]').type('Some text description');

    cy.get('[data-cy="accomplishment-checkbox"]').click();

    cy.get('.Accomplishment-btn').click();

    cy.contains('This Accomplisment was Successfully Submitted').should(
      'be.visible'
    );
  });

  it('should return back to the accomplishment form with empty inputs when Go Back button is clicked', () => {
    cy.get('[data-cy="accomplishment-title-input"]').type('Some text title');
    cy.get('[data-cy="accomplishment-input"]').type('Some text description');
    cy.get('[data-cy="accomplishment-checkbox"]').click();
    cy.get('.Accomplishment-btn').click();
    cy.contains('This Accomplisment was Successfully Submitted').should(
      'be.visible'
    );

    cy.contains('button', 'Go Back').click();

    cy.get('[class="Accomplishment"]').should('be.visible');

    cy.get('[data-cy="accomplishment-title-input"]').should('have.value', '');
    cy.get('[data-cy="accomplishment-input"]').should('have.value', '');
    cy.get('[data-cy="accomplishment-checkbox"]').should('not.be.checked');
  });
});
