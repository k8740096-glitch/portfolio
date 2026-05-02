const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const app = express();
const projectRoutes = require("./routes/projectRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);

//test route
app.use("/",(req, res) => {
    res.send("API is running");
});

//server static files
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.use((req, res)=> {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


//connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));
//Start server
app.listen(PORT, () => {console.log(`Server running on port"${PORT}`);
});