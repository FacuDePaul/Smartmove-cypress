describe("Test Log In and Out", () => {
  it("should log in and out", () => {
    cy.visit("/");

    cy.get('button[type="button"]')
      .contains("Hacé click para ingresar")
      .click();

    // Enter the username
    cy.get('input[name="correo"]').type("mhuber");

    // Enter the password
    cy.get('input[name="Contraseña"]').type("password");

    // Click the login button
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/inicio");

    cy.get("button")
      .find('img[alt="photoURL"]') // Find the button by locating the img inside it with the "photoURL" alt text
      .click();

    cy.contains("li", "Cerrar sesión") // Find the list item with the text "Cerrar sesión"
      .click();
  });

  it("should throw alert if fails to log in", () => {
    cy.visit("/");

    cy.get('button[type="button"]')
      .contains("Hacé click para ingresar")
      .click();

    // Enter the username
    cy.get('input[name="correo"]').type("asdasdafafsasf");

    // Enter the password
    cy.get('input[name="Contraseña"]').type("asdafaseaeaes");

    cy.get('button[type="submit"]').click();

    cy.on("window:alert", (t) => {
      expect(t).to.contain("Por favor, verifica los datos ingresados");
    });
  });
});
