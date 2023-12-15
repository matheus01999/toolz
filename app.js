// Carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require('./routes/admin')
const path = require('path')
var shell = require('shelljs')
const { default: mongoose } = require('mongoose')
//const mongoose = require("mongoose")


//Configurações
    //Body Parser
    app.use(bodyParser.json())
    app.use(express.urlencoded({extended: true}))
    

    //Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://labtl:27017/').then(() => {
        console.log("Conectado ao mongo")
    }).catch((err)=>{
        console.log("Erro ao se conectar com o banco" + err)
    })


    


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