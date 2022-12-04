const express = require("express")
const cors = require('cors')
const app = express()

const adminRoute = require('./routes/admin')

const connectDB = require('./database/connect_db');


app.use(cors())
app.use(express.json())

connectDB().then(() => {
    console.log('connected');

    app.use('/api/v1/admins', adminRoute );
    
    app.listen(5000, () => {
        console.log("Server has started!")
    })

}).catch((err) => {
    console.log(err)
})

