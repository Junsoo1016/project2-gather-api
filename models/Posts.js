const { mongo } = require('mongoose')
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Posts = new Schema({
    title: String,
    date: String,
    location: String,
    description: String,
    complete: Boolean,
    coordinates: {
        lat: Number,
        lng: Number 
    },
    requested: Boolean,
    createdBy: [{
        ref: 'Users',
        type: Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('Post', Posts)