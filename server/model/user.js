import Promise from "bluebird";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
Promise.promisifyAll(bcrypt);

const userSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    displayName: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre("save", async function(next) {
    var user = this;
    if (!user.isModified("password")){
        return next();
    }
    var salt = await bcrypt.genSaltAsync(10);
    var hash = await bcrypt.hashAsync(user.password, salt);
    user.password = hash;
    return next();
});

export default mongoose.model("User", userSchema);
