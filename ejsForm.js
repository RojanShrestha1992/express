import express from 'express'
const app = express()
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.get("/add-user", (req, resp)=>{
    resp.render('addUser')
})

app.post('/submit-user', (req,resp)=>{
    console.log(req.body)
resp.render('submit-user', req.body)

})
app.get("/users", (req,resp)=>{
    const users = ['ram', 'shyam', 'hari']
    resp.render("users", {users:users})
})
app.listen(3200)