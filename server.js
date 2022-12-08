const sequelize = require('./config/connection')
const express = require('express')
const path = require("path")
const { engine } = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3001

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.get("/", async(req,res)=>{
    res.render("home")
})
app.get("/login", (req,res)=>{
    res.render("login")
})

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening @ http://localhost:${PORT}`)
    })
})

