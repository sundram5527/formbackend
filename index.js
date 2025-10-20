const express= require('express');
const app= express();
const cors = require('cors');

//cors middleware
// ✅ Allow requests from frontend
app.use(cors({
    origin:"https://formfrontend-production.up.railway.app", // your frontend url
    methods: ["GET","POST","PUT","DELETE"],
    credentials:true
}));

const connectDB= require('./db');

const dotenv= require('dotenv');
const users = require('./routes/users');

//middleware
app.use(express.json());

app.use('/api',users);

//load config
dotenv.config()
//connect database 
connectDB();

const PORT= process.env.PORT;


app.get('/',(req,res) =>{
    res.send("Welcome to the backend");
})

app.listen(PORT, () =>{
    console.log("server is up");
    
})