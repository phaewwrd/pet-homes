const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const handleError = require('./middlewares/handleError')
const app = express()

//Routing
const authRouter = require('./Routes/auth-routes')
const userRouter = require('./Routes/user-routes')
const petRouter = require('./Routes/pet-routes')
const adminRouter = require('./Routes/admin-routes')
const officerRouter = require('./Routes/officer-routes')
const mapRouter = require('./Routes/map-routes')

//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

//Routing
app.use("/", authRouter)
app.use("/member", userRouter)
app.use("/pet", petRouter)
app.use("/admin", adminRouter)
app.use("/officer", officerRouter)
app.use("/maps", mapRouter)


//Handle errors
app.use(handleError)


const PORT = 8800
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))