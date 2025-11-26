// nodemon - штука для синхронизации сервера при сохранении (при изменении js файлов перезапускает сервер)

const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')

const app = express()
app.use(cors())
app.use(body_parser.json())

app.post("/login",(req,res) => {
    console.log(req)
})

app.listen(3000, () => {
    console.log("Soul of machine is alive")
})








