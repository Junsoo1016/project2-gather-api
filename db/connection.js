const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gather-app_db', { useNewUrlParser: true} )

mongoose.Promise = Promise

module.exports = mongoose
