const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Users = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    userId: String,
    password: String,
    email: String,
    logIn: Boolean,
    savedPosts: [{
        ref: 'Posts',
        type: Schema.Types.ObjectId
    }],
    myPosts: [{
        ref: 'Posts',
        type: Schema.Types.ObjectId
    }]

})

module.exports = mongoose.model('Users', Users)