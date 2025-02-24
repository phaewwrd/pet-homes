const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const handleError = require('./middlewares/handleError')
const app = express()

//Routing
const authRouter = require('./Routes/auth-routes')

//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//Routing
app.use("/", authRouter)


//Handle errors
app.use(handleError)


const PORT = 8800
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))