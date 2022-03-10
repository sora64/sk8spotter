const { Image } = require('../models');

const imagedata = [
  {
    title: 'Blossoming Apricot',
    skatepark_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
];

const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
