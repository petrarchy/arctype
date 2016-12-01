# Component library

Source files are bundled using Webpack and exported in `../lib`. Included components are defined here.

Components use `react-css-themr` to allow external theming - simply import a css module and pass it into a component via its `theme` prop.

Components utilize `redux` to maintain state and perform actions. Async actions primarily translate into `graphql` queries and mutations. At some point, we plan to provide hooks for developers to use a traditional REST backend or other alternative if they prefer.
