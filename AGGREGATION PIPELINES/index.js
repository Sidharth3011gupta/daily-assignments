const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { getMovies } = require("./controller/aggregation");
const router = require("./routes/routes");
mongoose.connect("mongodb://localhost:27017/test").then(()=>console.log("DB Connected")).catch(()=>console.log("Error Connecting DB"))

app.use("/api",router)
app.listen(13000,()=>{
    console.log("Server Started");
})