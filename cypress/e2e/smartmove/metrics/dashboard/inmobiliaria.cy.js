describe("There is a dashboard for inmobiliaria", () => {
  before(() => {
    //cy.setupProxy(); // Setup the proxy for CORS
  });

  it("should find an iframe element inside the page for inmobiliaria", () => {
    cy.visit("/inmobiliaria");
    cy.get("iframe").should("exist");
  });
});
