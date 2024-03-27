const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "..", ".env") })

const express = require("express")
const cors = require("cors")

const toDoRouter = require("./toDo/toDo.router")
const errorHandler = require("./errors/errorHandler")
const notFound = require("./errors/notFound")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/toDo", toDoRouter) 

app.use(errorHandler)
app.use(notFound)

module.exports = app