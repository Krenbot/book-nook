const sequelize = require('../config/connection');
const { User, Review, Book, Comment } = require('../models');

const userData = require('./userSeedData.json');
const bookData = require('./bookSeedData.json');
const reviewData = require('./reviewSeedData.json');
const commentData = require('./commentSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
    });
    console.log('\n----- USERS SEEDED -----\n');
    await Book.bulkCreate(bookData);
    console.log('\n----- BOOKS SEEDED -----\n');
    await Review.bulkCreate(reviewData);
    console.log('\n----- REVIEWS SEEDED -----\n');
    await Comment.bulkCreate(commentData);
    console.log('\n----- COMMENTS SEEDED -----\n');

    console.log('\n----- DATABASE SYNCED -----\n');

    process.exit(0);
}

seedDatabase()