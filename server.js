const sequelize = require('./config/connection')
const express = require('express')
const session = require("express-session")
const path = require("path")
const { engine } = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3001
const cookieParser = require('cookie-parser');
const controllers = require('./controllers')

app.use(cookieParser());
app.use(session({
    secret: 'anystringoftext',
    saveUninitialized: true,
    resave: true
}));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')))
app.use(controllers);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening @ http://localhost:${PORT}`)
    })
})