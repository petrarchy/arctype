import {GraphQLBoolean} from 'graphql';

export default {
    auth: {
        type: GraphQLBoolean,
        resolve (_, params, req) {
            console.log('req: ', req);
            console.log('session: ', req.session);
            return req.session.authenticated;
        }
    }
};
