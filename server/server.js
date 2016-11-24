const express = require("express");
const graphqlHTTP = require("express-graphql");
const {schema, root} = require("./schema");

const app = express();

const PORT = 3000;

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(PORT, () => { console.log(`Demo server listening on port ${PORT}`); });
