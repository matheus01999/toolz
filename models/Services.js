const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Service = new Schema({
    PID:{
        type: String,
        require: true,
        default: '#'
    },

    nome:{
        type: String,
        require: true,
        default: '#'
    },

    host:{
        type: String,
        require: true,
        default: '#'
    },

    status:{
        type: Boolean,
        require: true,
    
    }
})

mongoose.model('services', Service)