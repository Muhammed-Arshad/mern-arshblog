import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


mongoose.connect(process.env.MONGOOSE_URL).then(
    ()=> {console.log('Database is connected!!')})

const app = express();

app.listen(3000,()=>{
    console.log('server is running port 3000!')
});