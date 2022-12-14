const express = require("express");
const connectToMongo = require("./db");

const app = express();
app.use(express.json());
const cors = require("cors");

app.use(cors());
const employeeRoute = require("./routes/employee")
const userRoute = require("./routes/user")
connectToMongo();

app.use("/employee",employeeRoute);

app.use("/user",userRoute);

app.listen(3001, () => {
  console.log("MongoDB Server Started...");
});

// {
//   "name": "Aniket",
//   "age": 34,
//   "country": "India",
//   "position": "Backend",
//   "wage": 34000
// }
