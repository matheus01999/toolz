const express = require('express')
const shell = require('shelljs')
const router = express.Router()
const mongoose = require('mongoose')

require('../models/Services')
require('../models/Hosts')
const Hosts = mongoose.model('hosts')
const Services = mongoose.model('services')

router.get('/', (req, res) => {
    res.render("admin/index")
})


//Rotas do host

router.get('/hosts', (req,res) => {
    Hosts.find().lean().then((hosts) => {
        res.render('admin/hosts', {hosts: hosts})

    }).catch((err) => {console.log("ERRO so listar hosts" + err)})
    
})

router.get('/host/add', (req,res) => {
    res.render("admin/addhost")
})

router.post('/host/new', (req, res) => {
    const novoHost = {
        apelido: req.body.apelido,
        hostIP: req.body.hostIP,
        hostname: req.body.hostname
    }
  

    new Hosts(novoHost).save().then(() => {
        console.log('um novo host foi adicionado ')
        res.redirect('/admin')
    }).catch((erro) => {
        console.log("Erro ao adicionar host" + erro)
    })

})

//Rotas de Serviço
router.get('/services', (req, res) =>{
    Services.find().lean().then((services) =>{
        res.render('admin/services', {services: services})
    }).catch((err) => {console.log("Erro ao carregar serviços" + err)})
    
})

module.exports = router