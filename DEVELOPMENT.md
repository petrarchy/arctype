# Developing

## Directory structure
Source files go in /src, temporary development files go in /build, final production bundle goes in /lib. Development server is located in /server.

## Node environment
[NVM](https://github.com/creationix/nvm) is a great library that allows you to switch between different versions/installs of NPM. We are developing on Node 7.x.

`npm link` will link petra to your node_modules, allowing you to import it as a module from another repository.

## Linters
[Stylelint](https://github.com/stylelint/stylelint) for SASS, [ESLint](https://github.com/eslint/eslint) for Javascript. Both have packages for a variety of IDEs. At some point, we will add precommit hooks for our linting to pass.

## Build scripts:

- `npm run build` - Compiles src code into a distributable bundle in /lib.
- `npm run start` - Starts up development server on localhost:3000.
- `npm run lint`  - Lints all scss and js files.
- `npm run test`  - Runs all tests in /test.
