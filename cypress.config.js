const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    reporter: 'spec',
    baseUrl: 'https://telnyx.com/',
    defaultCommandTimeout: 10000,
    viewportHeight: 800,
    viewportWidth: 1500,
    setupNodeEvents(on, config){
      // implement node event listeners here
    },
  },
});
