import express from 'express'
const app = express()


app.set('view engine', 'ejs')
app.get("/", (req,resp)=>{
    // resp.send("home page")
    resp.render("home",{name: 'Rojan Shrestahaa', text: " hahaha"})

})
app.listen(3200)