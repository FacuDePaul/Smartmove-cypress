describe("There is a dashboard for inmobiliaria", () => {
  before(() => {
    //cy.setupProxy(); // Setup the proxy for CORS
  });

  it("should find an iframe element inside the page for inmobiliaria", () => {
    window;
    cy.visit("", {
      onBeforeLoad(win) {
        cy.spy(win, "postMessage").as("postMessage");
      },
    });
    cy.get("iframe").should("exist");

    cy.get("@postMessage", { timeout: 10000 })
      .should("have.been.called")
      .and("have.been.calledWithExactly", "Report loaded");
  });
});
