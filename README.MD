# Movies App
Movies app displaying upcoming movies from TMDb

## Setting up development environment
* Install node, yarn
* Editor VSCode
* Extensions: Eslint

## CI/CD

## Getting Started
Before running any of the scripts listed bellow, it is necessary to have all the packages installed, a.k.
a. yarn

* Scripts:
  * `yarn start` -> starts the development server.
  * `yarn test` -> runs the unit tests.
  * `yarn test:coverage` -> prints out the coverage in the terminal and generates the report.
  * `yarn test:coverage:open` -> displays the code coverage in a browser.
  * `yarn test:e2e:local` -> opens a cypress chromium window for e2e tests, requires that the web server is running
  * `yarn test:e2e:local:ci` -> headless e2e tests
  * `yarn lint` -> goes through the code and checks for linting issues.
  * `yarn lint:types` -> goes through the code and checks for typescript violations.
  * `yarn lint:fix` -> goes through the code and checks for linting issues and fixes them where possible.
  * `yarn storybook` -> run the local storybook server to view the stories
  * `yarn build-storybook` -> generate storybook

## E2E tests
Running E2E tests locally:
1. `yarn` (installs the dependencies)
2. `yarn start` (starts the development server on port 3000 which the e2e tests will target)
3. `yarn test:e2e:local` (opens the cypress window)

## Third party libraries
* styled-components -> easy parametrization of css for making re usable building blocks
* typescript -> superset of javascript, introduces type definitions.
* react-router-dom -> navigation library
* eslint -> static analyzer, validates code against defined rules
* jest -> test runner
* cypress -> end to end testing framework 
* storybook -> visually testing ui components in isolation