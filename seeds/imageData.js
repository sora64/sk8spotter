const { Image } = require("../models");

const imagedata = [
  {
    title: "chris",
    skatepark_id: 2,
    filename: "chris-28th.jpg",
    description: "Chis Honore with a backside boardside nosegrab",
  },
  {
    title: "chris-smith",
    skatepark_id: 2,
    filename: "chris-smith-28th.jpg",
    description: "Chris Honore doing a frontside smith grind",
  },
  {
    title: "dante",
    skatepark_id: 2,
    filename: "dante-28th.jpg",
    description: "Dante doing a 360 flip off the angle ledge",
  },
  {
    title: "deon",
    skatepark_id: 1,
    filename: "deon-texas-beach.jpg",
    description: "Deon blasting a backside tail on the quarter",
  },
  {
    title: "eli",
    skatepark_id: 1,
    filename: "eli-texas-beach.jpg",
    description: "Eli rolling up to the handrail",
  },
  {
    title: "front-grind",
    skatepark_id: 1,
    filename: "front-grind-texas-beach.jpg",
    description: "Josh carving a frontside 5.0 on the coping",
  },
  {
    title: "gavin",
    skatepark_id: 2,
    filename: "gavin-28th.jpg",
    description: "Gaving boosting an airwalk off the kicker",
  },
  {
    title: "josh",
    skatepark_id: 3,
<<<<<<< HEAD
    filename: 'josh-laurel-skatepark.png',
    description:''
=======
    filename: "chris-28th.jpg",
    description: "Josh with a styled front feeble on the vert wall",
>>>>>>> a5e2221698dde6c386b86d85575cbc3eb618f347
  },
  {
    title: "laurel-bowl",
    skatepark_id: 3,
    filename: "laurel-bowl.jpg",
    description:
      "Jay blasting a backside tuck-knee out of the pocket of the bowl",
  },
  {
    title: "nate-front-board",
    skatepark_id: 2,
    filename: "nate-front-board-28th.png",
    description:
      "Nate Martin with a proper frontside boardslide on the A-frame",
  },
  {
    title: "texas-beach-footplant",
    skatepark_id: 1,
    filename: "texas-beach-footplant.png",
    description: "Ryan blasting a slob-plant out of the pocket of the bowl",
  },
  {
    title: "turtle-laurel-bowl",
    skatepark_id: 3,
    filename: "turtle-laurel-bowl.png",
    description: "Turtle carving backside in the pool",
  },
  {
    title: "turtle-vert-laurel",
    skatepark_id: 3,
    filename: "turtle-laurel-bowl.png",
    description: "Turtle styling out a speedcheck on the vert ramp",
  },
];

const seedImages = () => Image.bulkCreate(imagedata);

module.exports = seedImages;
