const express = require("express")
const cors = require('cors')
const connectDB = require('./database/connect_db');

const app = express()
app.use(cors())
app.use(express.json())

connectDB().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err)
})

app.listen(5000, () => {
    console.log("Server has started!")
})