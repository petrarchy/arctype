const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = require("graphql");

var currentId = 0;
const db = {};

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        displayName: {type: GraphQLString},
        uid: {type: new GraphQLNonNull(GraphQLID)}
    }
});

const CreateUserType = new GraphQLInputObjectType({
    name: "UserInput",
    fields: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        displayName: {type: GraphQLString}
    }
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            user: {
                type: UserType,
                args: {
                    uid: {
                        name: "uid",
                        type: GraphQLID
                    }
                },
                resolve (_, params) {
                    return db[params.uid];
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: {
            createUser: {
                type: UserType,
                args: {
                    data: {
                        name: "data",
                        type: new GraphQLNonNull(CreateUserType)
                    }
                },
                resolve (_, params) {
                    const newId = currentId++;
                    const newUser = {
                        name: params.data.name,
                        displayName: params.data.displayName,
                        uid: newId
                    };
                    db[newId] = newUser;
                    return newUser;
                }
            }
        }
    })
});
