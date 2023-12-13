const express = require('express')
const router = express.Router()

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

module.exports = router