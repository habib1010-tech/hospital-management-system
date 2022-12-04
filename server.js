const express = require("express")
const cors = require('cors')
const app = express()

const adminRoute = require('./routes/admin')
const patientRoute = require('./routes/patient')
const departmentRoute = require('./routes/department')
const doctorRoute = require('./routes/doctor')

const connectDB = require('./database/connect_db');


app.use(cors())
app.use(express.json())

connectDB().then(() => {
    console.log('connected');

    app.use('/api/v1/admins', adminRoute );
    app.use('/api/v1/patients', patientRoute );
    app.use('/api/v1/departments', departmentRoute );
    app.use('/api/v1/doctors', doctorRoute );

    app.listen(5000, () => {
        console.log("Server has started!")
    })

}).catch((err) => {
    console.log(err)
})

