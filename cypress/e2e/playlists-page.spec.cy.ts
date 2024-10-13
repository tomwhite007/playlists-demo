describe('Playlists Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Redirects to playlists route', () => {
    cy.url().should('eq', `http://localhost:4200/playlists`);
  });

  it('Shows Playlists Demo title', () => {
    cy.get('.header-title').contains('Playlists Demo');
  });

  it('Shows instruction text', () => {
    cy.get('.instruction').contains(
      'Click on a playlist to see tracks and play'
    );
  });

  it('Shows table with headings', () => {
    cy.get('.playlists-table > thead > tr > th').should((tableHeadings) => {
      expect(tableHeadings.length).to.equal(3);
      expect(tableHeadings[0]).to.contain.text('Playlist');
      expect(tableHeadings[1]).to.contain.text('Curated by');
    });

    cy.get('.playlists-table > tbody > tr').should('have.length', 18);
  });

  it('Shows table with 18 rows', () => {
    cy.get('.playlists-table > tbody > tr').should('have.length', 18);
  });
});
