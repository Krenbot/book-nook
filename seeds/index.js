const sequelize = require('../config/connection');
const { User, Review, Book, Comment } = require('../models');

const userData = require('./userSeedData.json');
const bookData = require('./bookSeedData.json');
const reviewData = require('./reviewSeedData.json');
const commentData = require('./commentSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await userData();
    console.log('\n----- USERS SEEDED -----\n');
    await bookData();
    console.log('\n----- BOOKS SEEDED -----\n');
    await reviewData();
    console.log('\n----- REVIEWS SEEDED -----\n');
    await commentData();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
}

seedDatabase()