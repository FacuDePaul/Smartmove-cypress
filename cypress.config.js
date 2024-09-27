const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://main.djeml4cm1lzmh.amplifyapp.com/", // aca va la url base
  },
});
