const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Service = new Schema({
    PID:{
        type: String,
        require: true,
        default: '#'
    },

    Name:{
        type: String,
        require: true,
        default: '#'
    },

    Host:{
        type: String,
        require: true,
        default: '#'
    },

    Statu:{
        type: Boolean,
        require: true,
    
    }
})

mongoose.model('services', Service)