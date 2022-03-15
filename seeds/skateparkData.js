const { Skatepark } = require('../models');
//Texas Beach, 28th, Laurel

const skateparkdata = [
  {
    name: 'Texas Beach',
    location: 'Richmond, VA',
    lat: '37.532304492794694',
    lon: '-77.46874379981473',
    description: 'DIY skatepark built by the skateboarders of Richmond VA',
  },
  {
    name: '28th',
    location: '2813 Bainbridge St, Richmond, VA 23225',
    lat: '37.51681691182082',
    lon: '-77.45983223783848',
    description: 'Street style skatepark composed of ledges and rails',
  },
  {
    name: 'Laurel',
    location: '10301 Hungary Spring Rd, Glen Allen, VA 23060',
    lat: '37.64415567723789',
    lon: '-77.50848593279652',
    description: 'Transitioned styled skatepark built in the 80s',
  },
];

const seedGallery = () => Skatepark.bulkCreate(skateparkdata);

module.exports = seedGallery;
