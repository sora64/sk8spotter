const { Skatepark } = require('../models');
//Texas Beach, 28th, Laurel

const skateparkdata = [
  {
    name: 'Texas Beach',
    location: 'Richmond, VA',
    description: 'DIY skatepark built by the skateboarders of Richmond VA',
  },
  {
    name: '28th',
    location: 'Richmond, VA',
    description: 'Street style skatepark composed of ledges and rails',
  },
  {
    name: 'Laurel',
    location: 'Henrico County, VA',
    description: 'Transitioned styled skatepark built in the 80s',
  },
];

const seedGallery = () => Skatepark.bulkCreate(skateparkdata);

module.exports = seedGallery;
