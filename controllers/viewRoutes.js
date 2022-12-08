const router = require('express').Router();

router.get("/", async(req,res)=>{
    res.render("home")
})

router.get("/login", async(req,res)=>{
    res.render("login")
})