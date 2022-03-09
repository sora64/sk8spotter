const { Skatepark } = require('../models');
//Texas Beach, 28th, Laurel

const skateparkdata = [
  {
    name: 'Texas Beach',
    location: 'Richmond, VA',
  },
  {
    name: '28th',
    location: 'Richmond, VA',
  },
  {
    name: 'Laurel',
    lcation: 'Henrico County, VA',
  },
];

const seedGallery = () => Skatepark.bulkCreate(skateparkdata);

module.exports = seedGallery;
