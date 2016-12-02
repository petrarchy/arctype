import {GraphQLInputObjectType, GraphQLNonNull, GraphQLString} from "graphql";

export default new GraphQLInputObjectType({
    name: "UserInput",
    fields: {
        uid: {type: new GraphQLNonNull(GraphQLString)},
        fullName: {type: GraphQLString},
        password: {type: GraphQLString}
    }
});
