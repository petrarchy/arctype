# Developing

## Directory structure
Source files go in /src, temporary development files go in /build, final production bundle goes in /lib.

## Node environment
NVM is a great library that allows you to switch between different versions/installs of NPM. We are developing on Node 7.1.0.
`npm link` will link Petra to your node_modules, allowing you to run `require("petra")`

## Linters
Stylelint for scss, ESLint for js. Both have packages for a variety of IDEs. At some point, we may add precommit hooks for our linting to pass, but right now our linting is erroneously failing in a few cases.

## Build scripts:

- `npm run build` - Compiles src code into a distributable bundle in /lib.
- `npm run start` - Starts up webpack-dev-server on localhost:8080
- `npm run lint` - Lints all scss and js files in /src
