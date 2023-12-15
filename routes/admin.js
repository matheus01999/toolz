const express = require('express')
const shell = require('shelljs')
const router = express.Router()
const mongoose = require('mongoose')

require('../models/Services')
require('../models/Hosts')
const Hosts = mongoose.model('hosts')
const Services = mongoose.model('services')

router.get('/', (req, res) => {
    Hosts.find().lean().then((hosts) => {
        Services.find().lean().then((services) => {
            res.render("admin/index", {hosts : hosts , services : services})

        })
        
    })
    
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




router.get('/host/view/:id', (req,res) => {
    Hosts.findOne({_id:req.params.id}).lean().then((hosts) => {
        res.render('admin/viewHost', {hosts: hosts})

    }).catch((err) => {console.log("ERRO  hosts" + err)})
    
})
//Rotas de Serviço
router.get('/services', (req, res) =>{
    Services.find().lean().then((services) =>{
        res.render('admin/services', {services: services})

    }).catch((err) => {console.log("Erro ao carregar serviços" + err)})
    
})

router.post('/services/new', (req, res) => {
    const newService = {
        nome: req.body.nome,
        host: req.body.host
    }
  

    new Services(newService).save().then(() => {
        console.log('um novo host foi adicionado ')
        res.redirect('/admin')
    }).catch((erro) => {
        console.log("Erro ao adicionar host" + erro)
    })

})


module.exports = router