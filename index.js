import express from "express"
import multer from "multer"
const app = express()
import connection from "./config/sequelize-config.js"
import Galeria from "./models/Galeria.js"
import GaleriaService from "./services/GaleriaService.js"
import Imagem from "./models/Galeria.js"

app.use(express.static('public'))
app.set("view engine","ejs")

//realizando conexao com o banco

connection.authenticate().then(()=>{
    console.log("Conexao feita com sucesso!")
}).catch((error)=>{
    console.log(error)
})

//criando o banco caso ele nao exista

connection.query(`CREATE DATABASE IF NOT EXISTS galeria`).then(()=>{
    console.log('o banco foi criado')
}).catch((error)=>{
    console.log(error)
})
//configurando o multer

 const upload = multer({dest:"public/uploads/"})

 app.get("/",(req,res)=>{
    GaleriaService.SelectPictures().then(
        imagens=>{
            res.render("index",{
                imagens:imagens
            })
        }
    )
  
 })

 app.post("/upload",upload.single("file"),(req,res)=>{
   const file = req.file.filename
   GaleriaService.Save(file)
   res.redirect("/")
 })

const porta = 8080
app.listen(porta,(error =>{
    if(error){
        console.log(`Ocorreu um erro! ${error}`)
    }else{
        console.log(`Servidor rodando em http://localhost:${porta}.`)
    }
}))