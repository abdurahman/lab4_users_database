const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 4,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Can't accept same email from diff user"],
        trim: true,
        uppercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    web: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        validate: function(value) {

            var urlRegex = /^([\http\.]+@([\https]+\.)+[\w-]{2,4})?$/;

            return urlRegex.test(value);
        }
    },
    zip: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        validate: function(value){

            var zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

            return zipRegex.test(value);

          },

          message: props => `${props.value} is not a valid Zip Code. Please try again`
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: function(value){
            return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid Phone Number`
    },
    created: {
        type: Date,
        default: Date.now
    },
});

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;