const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Host = new Schema({
    hostname:{
        type: String,
        require: true
    },

    data:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('hosts', Host)