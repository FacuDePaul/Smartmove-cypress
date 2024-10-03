const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit", // Usamos el reporte de JUnit
  reporterOptions: {
    mochaFile: "cypress/results/test-results.[hash].xml", // Ruta de los archivos de resultados
    toConsole: true, // Opcional: imprime los resultados en la consola
    //experimentalModifyObstructiveThirdPartyCode: true,
    //chromeWebSecurity: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implementar node event listeners aquí si es necesario
    },
    baseUrl: "https://main.djeml4cm1lzmh.amplifyapp.com/", // URL base
    //baseUrl: "http://localhost:3000/", // URL base
  },
});
