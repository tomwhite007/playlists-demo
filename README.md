# PlaylistsDemo

This project is a simple demo of integrated code using:

- Angular
- Angular Material
- NgRx
- Karma & Jasmine
- Cypress

A JSON file in the `public/api` folder is used as an API to get Playlists and display them in a table.

Some rules I've tried to follow:

- Nested component architecture
- The adapter pattern for getting data
- The facade pattern for state
- Contained styles for non-repeating components
- T-Dry (try to be dry)
- Standalone components - no modules
- OnPush change detection everywhere
- Signals only in templates - no async pipe

I've added several unit tests, but only as examples. I aim for above 95% coverage on an enterprise-grade app.

Unit test types I've focussed on:

- Component initialisation and template logic tests (see `playlists-page.component.spec.ts`)
- Effects using marbles testing
- Selectors using the projector function approach
- Reducers as pure functions

I've added a few basic Cypress tests in `cypress/e2e/playlists-page.spec.cy.ts`. However, I haven't gone deep enough in this demo to use custom commands or shared selector/action code, which would reduce code and increase uniformity in a larger project.

Confession: I struggled to import the NgRx Playlists state feature as a lazy-loaded state slice using the newer Standalone provider syntax. Given a bit more time, I could definitely do this. I would have found this easy using the older lazy modules method, but I wanted to build this app as a pure Standalone app as an exercise.

Accessibility: This demo is accessible in that it uses semantic html. To improve, the table should announce its purpose, and the table rows should describe what will happen when they are clicked.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.8.

## Running development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Running Jasmine unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests with Cypress

Run `ng e2e` to execute the end-to-end tests with Cypress.

Or, you can run headless by `npm run e2e-headless`
