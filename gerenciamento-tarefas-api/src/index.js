const express = require("express") 
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

const port = 4000

const tarefaSchema = new mongoose.Schema({
    nome:{
      type: String,
      required: true 
    },
    descricao:{
      type: String,
      required: true
    },
    status:{
      type: String,
      enum: ["pendente","andamento","concluida"],
      default: "pendente"
    },
    dataCriacao:{
     type: Date,
     default: Date.now
    }
})

const Tarefa = mongoose.model("tarefa", tarefaSchema)

// http://localhost:4000/listartarefas
app.get("/listartarefas", async (req,res) => {
    const tarefas = await Tarefa.find()
    return res.send(tarefas)
})

// http://localhost:4000/buscartarefa/id
app.get("/buscartarefa/:id", async (req,res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    return res.send(tarefa)
})

// http://localhost:4000/criartarefa
app.post("/criartarefa", async (req,res) => {
    const tarefa = new Tarefa({
        nome: req.body.nome,
        descricao: req.body.descricao,
        status: req.body.status,
        dataCriacao: req.body.dataCriacao
    })
    await tarefa.save()
    return res.send(tarefa)
})

// http://localhost:4000/atualizartarefa/id
app.put("/atualizartarefa/:id", async (req,res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        descricao: req.body.descricao,
        status: req.body.status,
        dataCriacao: req.body.dataCriacao
    },{
        new: true
    })
    return res.send(tarefa)
})

// http://localhost:4000/deletartarefa/id
app.delete("/deletartarefa/:id", async (req,res) => {
    const tarefa = await Tarefa.findByIdAndDelete(req.params.id)
    return res.send(tarefa)
})


app.listen(port, () => {
    mongoose.connect('mongodb+srv://marcogritti15:msCL78iTnbYGTaeY@starwars-api.pu4d9.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api')
    console.log(`Server running PORT: ${port}`)     
})