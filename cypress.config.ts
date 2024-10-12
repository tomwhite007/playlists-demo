import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'u97nrn',
  e2e: {
    baseUrl: 'http://localhost:4200',
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'cypress/e2e/**/*.cy.ts',
  },
});
