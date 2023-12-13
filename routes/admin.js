const express = require('express')
const shell = require('shelljs')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Hosts')
const Hosts = mongoose.model('hosts')

router.get('/', (req, res) => {
    res.render("admin/index")
})


//Rotas princiapais

router.get('/hosts', (req,res) => {
    res.render('admin/hosts')
})

router.get('/host/add', (req,res) => {
    res.render("admin/addhost")
})

router.post('/host/new', (req, res) => {
    const novoHost = {
        hostname: req.body.hostname
    }

    //validar se o plugin esta instalado na maquina

    

    new Hosts(novoHost).save().then(() => {
        console.log('um novo host foi adicionado ')
        res.redirect('/admin')
    }).catch((erro) => {
        console.log("Erro ao adicionar host" + erro)
    })

})

module.exports = router