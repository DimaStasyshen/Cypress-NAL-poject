const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "wruxsd",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    viewportWidth: 1200,
    viewportHeight: 800,
    baseUrl: "https://naveenautomationlabs.com/opencart/",
    env: {
      userEmail : "carlosvela@gmail.com",
      userPassword: "12345",
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
