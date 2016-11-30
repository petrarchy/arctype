import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} from "graphql";

import UserModel from "./model/user";


const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        uid: {type: new GraphQLNonNull(GraphQLString)},
        displayName: {type: GraphQLString}
    }
});

const CreateUserType = new GraphQLInputObjectType({
    name: "UserInput",
    fields: {
        uid: {type: new GraphQLNonNull(GraphQLString)},
        displayName: {type: GraphQLString},
        password: {type: GraphQLString}
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
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve (_, params) {
                    // TODO: There is a problem with returning this properly
                    return UserModel
                        .find({uid: params.uid})
                        .exec();
                }
            },
            users: {
                type: new GraphQLList(UserType),
                args: {
                    uid: {
                        name: "uid",
                        type: GraphQLString
                    }
                },
                resolve (_, params) {
                    // Get all users unless a specific id is given to retrieve
                    var o = {};
                    if (params.uid) {
                        o.uid = params.uid;
                    }
                    return UserModel
                        .find(o)
                        .exec();
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: {
            createUser: {
                type: GraphQLBoolean,
                args: {
                    data: {
                        name: "data",
                        type: new GraphQLNonNull(CreateUserType)
                    }
                },
                async resolve (_, params) {
                    try {
                        const userModel = new UserModel(params.data);
                        const newUser = await userModel.save();
                        if (!newUser) {
                            throw new Error("Error creating new user");
                        }
                        return true;
                    } catch (err) {
                        throw new Error(`Error creating new user: ${err.message}`);
                    }
                }
            }
        }
    })
});
