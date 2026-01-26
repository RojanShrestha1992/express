const express = require('express')

const app = express()
app.get("/",(req,resp)=>{
    resp.send("<h1>basic node </h1>")
    
})
app.get("/about",(req,resp)=>{
    resp.send("<h1>about node </h1>")
    
})
app.get("/contact",(req,resp)=>{
    resp.send("<h1>contact node </h1>")
    
})
app.listen(3200)