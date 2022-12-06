const { Review } = require('../models/Review');

const reviewData = [
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;