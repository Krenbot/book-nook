const User = require('./User')
const Book = require('./Book')
const Review = require('./Review')
const Comment = require('./Comment')

User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Review, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Book.hasMany(User, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})

Book.hasMany(Comment, {
    foreignKey: 'book_id'
})

Book.hasMany(Review, {
    foreignKey: 'book_id'
})

Review.belongsTo(Book, {
    foreignKey: 'review_id'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Book, {
    foreignKey: 'comment_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = {
    User, Book, Review, Comment
}