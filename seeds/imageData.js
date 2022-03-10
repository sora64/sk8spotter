const { Image } = require('../models');

const imagedata = [
  {
    title: 'chris',
    skatepark_id: 2,
    filename: 'chris-28th.jpg',
    description:''
  },
  {
    title: 'chris-smith',
    skatepark_id: 2,
    filename: 'chris-smith-28th.jpg',
    description:''
  },
  {
    title: 'dante',
    skatepark_id: 2,
    filename: 'dante-28th.jpg',
    description:''
  },
  {
    title: 'deon',
    skatepark_id: 1,
    filename: 'deon-texas-beach.jpg',
    description:''
  },
  {
    title: 'eli',
    skatepark_id: 1,
    filename: 'eli-texas-beach.jpg',
    description:''
  },
  {
    title: 'front-grind',
    skatepark_id: 1,
    filename: 'front-grind-texas-beach.jpg',
    description:''
  },
  {
    title: 'gavin',
    skatepark_id: 2,
    filename: 'gavin-28th.jpg',
    description:''
  },
  {
    title: 'josh',
    skatepark_id: 3,
    filename: 'chris-28th.jpg',
    description:''
  },
  {
    title: 'laurel-bowl',
    skatepark_id: 3,
    filename: 'laurel-bowl.jpg',
    description:''
  },
  {
    title: 'nate-front-board',
    skatepark_id: 2,
    filename: 'nate-front-board-28th.png',
    description:''
  },
  {
    title: 'texas-beach-footplant',
    skatepark_id: 1,
    filename: 'texas-beach-footplant.png',
    description:''
  },
  {
    title: 'turtle-laurel-bowl',
    skatepark_id: 3,
    filename: 'turtle-laurel-bowl.png',
    description:''
  },
  {
    title: 'turtle-vert-laurel',
    skatepark_id: 3,
    filename: 'turtle-laurel-bowl.png',
    description:''
  },
];

const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
