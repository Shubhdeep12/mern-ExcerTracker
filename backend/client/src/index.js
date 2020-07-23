import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

// const express=require('express')
// const cors=require('cors')
// const mongoose=require('mongoose')



// require('dotenv').config();

// const app=express()
// const port =  3000

// app.use(cors())
// app.use(express.json())

// const uri=process.env.ATLAS_URI;
// mongoose.connect(uri, { useUnifiedTopology:true,useNewUrlParser: true, useCreateIndex: true});
// const connection=mongoose.connection;
// connection.once('open', ()=>{
//     console.log("mongodb database connection established successfully");

// })

// const exerciseRouter=require('./backend/routes/exercise')
// const userRouter=require('../backend/routes/users')

// app.use('/exercises',exerciseRouter)
// app.use('/users',userRouter)

// app.listen(port, ()=>{
//     console.log(`server is runing on port: ${port}`)
// })


ReactDOM.render(
  
    <App basename={process.env.baseURL}/>
  ,
  document.getElementById('root')
);

