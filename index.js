import express from "express"
import os from 'os';

const app = express();

app.use("/api",(req,res)=>{
    res.send('I am awesome, running on ' + os.hostname());
})


app.listen(3000,() => {
    console.log("i am listening at port 3000")
})
