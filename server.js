const sequelize = require('./config/connection')
const express = require('express')
const path = require("path")
const {Book,Comment,Review,User}= require("./models")
const { engine } = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 3001

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.get("/", async(req,res)=>{
    const books = await Book.findAll()
    const serializedBooks = books.map((book)=>book.get({plain:true}))

    res.render("home",{"title":serializedBooks})
})

app.get("/bookview/:id", async(req,res)=>{
    const selectedBook = await Book.findByPk(req.params.id)
    const selectedBookReviews = await Review.findAll({
        where: {
            book_id: selectedBook.id
        }
    })
    const serializedReviews = selectedBookReviews.map((review)=>
        review.get({plain:true})
    )
    res.render("individualBook",{"selectedBook":selectedBook.get({plain:true}),serializedReviews})
})
app.get("/login", (req,res)=>{
    res.render("login")
})


sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening @ http://localhost:${PORT}`)
    })
})

