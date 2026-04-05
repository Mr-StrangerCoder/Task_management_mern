const express = require("express")
require("dotenv").config()
const dbconn = require("./config/db")
const cors = require("cors")

const taskRouter = require("./routes/taskRoutes")
const userRouter = require('./routes/userRoute')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

app.use("./", (req, res)=>{
    res.send('i am server')
})

app.use('./task', taskRouter)
app.use('/user',userRouter)








app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})