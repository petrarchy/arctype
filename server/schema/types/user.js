import {GraphQLObjectType, GraphQLNonNull, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'User',
    fields: {
        uid: {type: new GraphQLNonNull(GraphQLString)},
        fullName: {type: GraphQLString},
        // Can't query for passwords on users for security reasons.
    }
});
