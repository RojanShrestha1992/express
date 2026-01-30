import express from 'express'
const app = express()

app.get("/", (req, resp)=>{
    resp.send("home page")
})
app.get("/users", (req, resp)=>{
    resp.send("users page")
})
app.get("/error", (req, resp, next)=>{
    // resp.send2("error page")
    const error = new Error('')
    error.status =404
    next(error)
})
function errorHandle(error, req, resp, next){
    resp.status(error.status ||  500).send("truy after some time")
}
app.use(errorHandle)
app.listen(3200)