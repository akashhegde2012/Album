import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js';
dotenv.config();
const app = express();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({extended:false,limit:true}));
app.use(cors());
const PORT = process.env.PORT; 

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>{console.log('Server running in port 5000')});
    })
    .catch((err)=> console.log(err));
app.use('/posts',postRoutes);
mongoose.set('useFindAndModify',false);
app.listen()