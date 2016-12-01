import {GraphQLList} from "graphql";
import db from "../../../db";

import UserType from "../../types/user";

export default {
    type: new GraphQLList(UserType),
    resolve () {
        // Get all users
        const users = db.get("users")
            .values()
            .value();
        return users;
    }
};
