describe("Test dashboard for Mudanzas", () => {
  it("shoud log in with role mudanzas", () => {
    cy.visit("/login/cliente");

    // Enter the username
    cy.get('input[name="correo"]').type("eneistadt");

    // Enter the password
    cy.get('input[name="Contraseña"]').type("password");

    // Click the login button
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/inicio");

    cy.get('button[type="button"]')
      .contains("Hacé click para ingresar")
      .click();

    cy.url().should("include", "/mudanzas");
  });

  it("should see dashboard for Mudanzas", () => {
    cy.visit("/mudanzas", {
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
