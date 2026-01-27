// const express = require('express')
import express from 'express'
import { home } from './pages/home.js'
import { about } from './pages/about.js'

const app = express()

// const express = require('express')() 
app.get("/", (req,resp)=>{
    resp.send(home())

})
app.get("/about", (req,resp)=>{
    resp.send(about())

})

app.listen(3200)