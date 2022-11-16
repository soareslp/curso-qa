const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "mochawesome",
 "reporterOptions": {
 "reportDir": "cypress/report/mochawesome-report",
 "overwrite": true,
 "html": true,
 "json": false,
 "timestamp": "mmddyyyy_HHMMss"
 },
  projectId: '69meny',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://alura-fotos.herokuapp.com',
  },
});
