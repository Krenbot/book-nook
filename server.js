const sequelize = require('./config/connection')
const express = require('express')
const routes = require('./controllers')
const { engine } = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3001

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))
app.use(express.json())
app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening @ http://localhost:${PORT}`)
    })
})

app.listen(PORT)