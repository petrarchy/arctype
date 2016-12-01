# Development Server

**NOTE: Dev server is not secure, do not use it in production.**

This is a lightweight development server that utilizes `lowdb` as a flat file database. Use `npm run start` to run it on `localhost:3000`. All modules in `../src/dev.js` will be available. The dev server automatically hot reloads js and css modules running in browser, but server changes still require a manual restart. In a real world scenario, this server would be replaced and instead run a proper database backend.
