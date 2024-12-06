
require("dotenv").config({path:"./config/.env"});


const connectDB = require('./config/mongoose');

const router = require("./routes/user");

const projectRoutes= require("./routes/project");


const aboutRoutes= require("./routes/about")


const blogroutes= require("./routes/blog")

const testimonialsRoutes= require("./routes/testimo");

const mediaRoutes= require("./routes/media");

const carrerRoutes= require("./routes/carrer");

const contactRoutes= require("./routes/contact");

const cityRoutes= require("./routes/city");
const path = require("path");

const express= require("express");

const app = express();

const cookieParser= require("cookie-parser");

const cors = require('cors');

app.use(cors({
   origin: 'https://reality-assitstant.netlify.app', // Allow requests from this origin
   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
   credentials: true, // Allow cookies if needed
 }));


app.use(express.json())
app.use(cookieParser())
app.use('/projectsAssests', express.static(path.join(__dirname, 'projectsAssests')));
app.use("/api/v1/user", router);
app.use("/api/v1/project",projectRoutes);
app.use("/api/v1/about", aboutRoutes);
app.use("/api/v1/testimonials", testimonialsRoutes);
app.use("/api/v1/blog", blogroutes);
app.use("/api/v1/media",  mediaRoutes);
app.use("/api/v1/career",  carrerRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/city", cityRoutes);
const port= process.env.PORT || 2100



connectDB();


app.listen(port,function(err){
 if(err){
    console.log("Error Running  server on port "+ port);
 }
 console.log("Server running on port "+ port);
});
