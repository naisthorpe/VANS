const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Yoga',
    },
    {
        category_name: 'Meditation',
    },
    {
        category_name: 'Web Development',
    },
    {
        category_name: 'Social',
    },
    {
        category_name: 'TV Show Talks',
    },
    {
        category_name: 'Sport Talks',
    },
    {
        category_name: 'Breathwork',
    },
    {
        category_name: 'Other',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
