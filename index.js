const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router1 = require("./routes/user-routes");
// import router from "./routes/user-routes";

const app=express();
app.use(bodyParser.json())

const PORT=5000;
const databaseUrl='mongodb+srv://mhsinternal1:ganja123@cluster0.hhelbnj.mongodb.net/firstProject';
app.use("/user",router1)

mongoose.connect(databaseUrl,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>app.listen(PORT)).then(()=>{
    console.log(`Server is listening on port ${PORT} and connected to database`);
}).catch((err)=>{
    console.log(err);
})

