import {GraphQLNonNull, GraphQLString} from 'graphql';
import db from '../../../db';

import UserType from '../../types/user';

export default {
    type: UserType,
    args: {
        uid: {
            uid: 'uid',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve (_, params) {
        const user = db.get('users')
            .get(params.uid)
            .value();
        return user;
    }
};
