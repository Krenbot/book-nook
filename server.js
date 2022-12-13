const sequelize = require('./config/connection')
const express = require('express')
const session = require("express-session")
const path = require("path")
const { Book, Comment, Review, User } = require("./models")
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
app.set('views', './views');
app.use(controllers);

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening @ http://localhost:${PORT}`)
    })
})

// app.get("/", async (req, res) => {
//     const books = await Book.findAll()

//     const serializedBooks = books.map((book) => book.get({ plain: true }))

//     res.render("home", { "title": serializedBooks })
// })

// app.get("/bookview/:id", async (req, res) => {
//     const selectedBook = await Book.findByPk(req.params.id)

//     if (!selectedBook) {
//         res.status(404).json({ message: 'No BOOKS found!' });
//         return;
//     }

//     const selectedBookReviews = await Review.findAll({
//         where: {
//             book_id: selectedBook.id
//         },
//     })

//     const serializedReviews = selectedBookReviews.map((review) =>
//         review.get({ plain: true })
//     )

//     res.render("individualBook", { "selectedBook": selectedBook.get({ plain: true }), serializedReviews })
// })

// app.get("/login", (req, res) => {
//     res.render("login")
// })

// app.get("/bookview/:id/newReview", async (req, res) => {
//     const newReviewBook = await Book.findByPk(req.params.id)
//     res.render("newReview", { title: newReviewBook.title })
// })

// app.get("/bookview/:id/newReview", async (req, res) => {
//     const newReviewBook = await Book.findByPk(req.params.id)
//     res.render("newReview", { title: newReviewBook.title })
// })