const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wruxsd",
  
  e2e: {
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    video: true,
    viewportWidth: 1200,
    viewportHeight: 800,
    baseUrl: "https://naveenautomationlabs.com",
    env: {
      email : 'carlosvela@gmail.com',
      password: '12345',
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
