
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()


//setting up middlewares
app.use(express.json({limit: "10mb"}))
if(process.env.NODE_ENV !== "production") {
    const morgan = require("morgan")
    app.use(morgan("dev"))
    require('dotenv').config()
}
app.use(cors(""))



//setting up db
mongoose.connect(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connected to database"))
.catch((err)=> console.log(err.message))

//routes

app.use("/posts", require("./routes/posts"))
app.use("/", (req, res)=> {
    res.send("welcome to memories api")
})

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`listening on port ${port}`))