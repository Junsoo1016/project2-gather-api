const mongoose = require('./connection')
const Posts = require('../models/Posts')

Posts.deleteMany({}).then(() => {
    Posts.create({
        "title": "Need 2 more soccer players",
        "date": "07/12/22",
        "location": "Chelsea Park, 9th Avenue, New York, NY, USA",
        "description": "We are looking for 2 soccer players who can join us on 07/12/22 at Chelsea Park.",
        "complete": "false",
        "coordinates": {"lat": 40.7500587, "lng": -74.001196},
        "requested": "false"
   }).then(() => process.exit())
})