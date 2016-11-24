const {
    buildSchema
} = require("graphql");

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => {
        return "world";
    }
};

module.exports = {schema, root};
