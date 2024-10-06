describe("Test dashboard for Propietario", () => {
  it("shoud log in with role propietario", () => {
    cy.visit("/login/cliente");

    // Enter the username
    cy.get('input[name="correo"]').type("lfredes");

    // Enter the password
    cy.get('input[name="Contraseña"]').type("password");

    // Click the login button
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/inicio");

    cy.get('button[type="button"]')
      .contains("Hacé click para ingresar")
      .click();

    cy.url().should("include", "/propietario");
  });

  it("should see dashboard for Propietario", () => {
    cy.visit("/propietario", {
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
