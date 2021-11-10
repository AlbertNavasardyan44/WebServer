const express=require('express')
const app=express()
const PORT=process.env.PORT || 80
app.get('/',(req,res)=>{
    // res.end('<h1>About Page</h1>')
    res.sendFile(__dirname + "/new.html");
})


app.listen(PORT,()=>{
    console.log('server has been started...')
})