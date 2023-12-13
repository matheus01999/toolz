// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
var shell = require('shelljs')
//const mongoose = require("mongoose")


//Configurações
    //Body Parser
    app.use(bodyParser.json())
    app.use(express.urlencoded({extended: true}))
    

    //Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //mongoose

    


    //public
    app.use(express.static(path.join(__dirname,'public')))

//Rotas
app.get('/',(req, res)=> {
    res.send('Main Route')
})
app.use('/admin', admin)



//Outras
const PORTA = 8081
app.listen(PORTA, () =>{
    console.log("Servidor rodando!")
    
})