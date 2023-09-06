const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    video: false,
    viewportWidth: 1200,
    viewportHeight: 800,
    baseUrl: "https://naveenautomationlabs.com/opencart/index.php?route=common/home",
    env: {
      email : '',
      password: '',
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
