import express from 'express'
const app = express()

function checkAgeRoute(req,resp,next){
    if(!req.query.age || req.query.age < 18){
        resp.send("not allowed ")
    }else{
        next()
    }
}
function checkUrl(req,resp,next){
    console.log("This req url is ", req.url)
   next()
}


app.get('/',(req,resp)=>{
    resp.send("<h1>Home page</h1>")
})
app.get('/login',checkUrl,(req,resp)=>{
    resp.send("<h1>login page</h1>")
})
app.get('/users',checkAgeRoute,checkUrl,(req,resp)=>{
    resp.send("<h1>users page</h1>")
})
app.get('/products',(req,resp)=>{
    resp.send("<h1>products page</h1>")
})
app.listen(3200)