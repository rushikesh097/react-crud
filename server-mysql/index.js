const express = require('express')

const app = express()

const employeeRoute = require("./routes/employee")

const cors = require('cors')

app.use(cors());

app.use(express.json())

app.use("/employee", employeeRoute);

app.listen(3001, () => {
    console.log('Connection Established !')
});