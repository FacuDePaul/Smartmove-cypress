describe("Test dashboards for CEO", () => {
  it("shoud log in with role CEO", () => {
    cy.visit("/login/cliente");

    // Enter the username
    cy.get('input[name="correo"]').type("bcingolani");

    // Enter the password
    cy.get('input[name="Contraseña"]').type("password");

    // Click the login button
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/inicio");

    cy.get('button[type="button"]')
      .contains("Hacé click para ingresar")
      .click();

    cy.url().should("include", "/CEO");
  });

  const roles = [
    "CEO",
    "Legales",
    "Mudanzas",
    "Propietario",
    "Empleado",
    "Inquilino",
  ];

  roles.forEach((role) => {
    it("should see dashboard for " + role, () => {
      cy.visit("/CEO", {
        onBeforeLoad(win) {
          cy.spy(win, "postMessage").as("postMessage");
        },
      });

      cy.contains("h6", role).parent().find("button").click();

      var urlmustcontain = "/" + (role === "CEO" ? "ceodashb" : role);

      cy.url().should("include", urlmustcontain);

      cy.get("iframe").should("exist");

      cy.get("@postMessage", { timeout: 10000 })
        .should("have.been.called")
        .and("have.been.calledWithExactly", "Report loaded");
    });
  });
});

/*
  it("should find an iframe element inside the page for inmobiliaria", () => {
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
  */
