import { publicDecrypt } from 'crypto'
import express from 'express'
import path from 'path'

const app = express()
// app.use(express.static('public'))

app.get('/', (req,resp)=>{
    resp.send("<h1>Home page</h1>")

})
app.use(express.urlencoded({extended:false}))
app.get('/login', (req,resp)=>{
    resp.send(`
        <form action="submit" method="post">
        <input type="text" placeholder="enter name" name="name"/>
        <input type="text" placeholder="enter password" name="password"/>
        <button>login</button>
        </form>
        `)

})
app.post('/submit', (req,resp)=>{
    console.log("login details ",req.body)
    resp.send("submit page")

})
app.get('/users', (req,resp)=>{
    resp.send("users page")

})
app.listen(3200)