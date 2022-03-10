const { Skatepark } = require('../models');
//Texas Beach, 28th, Laurel

const skateparkdata = [
  {
    name: 'Texas Beach',
    location: 'Richmond, VA',
    description: '',
  },
  {
    name: '28th',
    location: 'Richmond, VA',
    description: '',
  },
  {
    name: 'Laurel',
    location: 'Henrico County, VA',
    description: '',
  },
];

const seedGallery = () => Skatepark.bulkCreate(skateparkdata);

module.exports = seedGallery;
