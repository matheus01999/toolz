const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Host = new Schema({
    apelido:{
        type: String,
        require: true
    },
    hostname:{
        type: String,
        default: 'validar'
    },

    hostIP: {
        type: String,
        require: true
    },

    data:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('hosts', Host)