const express = require('express')
const app = express()

// const express = require('express')() 
app.get("/", (req,resp)=>{
    resp.send("<h1>home</h1>")

})

app.listen(3200)