import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import db from '../../../db';

import UserInputType from '../../types/user_input';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(UserInputType)
        }
    },
    async resolve (_, params) {
        try {
            if (db.get('users').has(params.data.uid).value()) {
                throw new Error('uid already taken');
            }
            db.get('users')
                .set(params.data.uid, params.data)
                .value();
            return true;
        } catch (err) {
            throw new Error(`Error creating new user: ${err.message}`);
        }
    }
};
