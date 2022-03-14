const { Pic } = require("../models");

const picdata = [
  {
    title: "Chris Honore",
    skatepark_id: 2,
    filename: "resized-chris-28th.jpg",
    description: "sliding through with a proper backside boardside nosegrab",
  },
  {
    title: "Chris onore",
    skatepark_id: 2,
    filename: "resized-chris-smith-28th.jpg",
    description: "styling out a super smoth frontside smith on the big rail",
  },
  {
    title: "Dante Lowe",
    skatepark_id: 2,
    filename: "resized-dante-28th.jpg",
    description: "Blasting a 360 flip off the angle ledge",
  },
  {
    title: "Deondre World",
    skatepark_id: 1,
    filename: "resized-deon-texas-beach.jpg",
    description: "Backside tail slide up the escalator qauarter",
  },
  {
    title: "Elija Elliot",
    skatepark_id: 1,
    filename: "resized-eli-texas-beach.jpg",
    description: "Eli rolling up for a backside feeble on the handrail",
  },
  {
    title: "Josh Glassner",
    skatepark_id: 1,
    filename: "resized-front-grind-texas-beach.jpg",
    description: "Josh slashing a frontside 5.0 on the coping",
  },
  {
    title: "Gavin McGrath",
    skatepark_id: 2,
    filename: "resized-gavin-28th.jpg",
    description: "Boosting an airwalk off the kicker",
  },
  {
    title: "Josh Bowling",
    skatepark_id: 3,
    filename: "resized-josh-laurel-skatepark.png",
    description: "Styling a front feeble on the 80s vert wall",
  },
  {
    title: "Willis Kimble",
    skatepark_id: 3,
    filename: "resized-laurel-bowl.jpg",
    description:
      "Willis blasting a backside tuck-knee out of the pocket of the bowl",
  },
  {
    title: "Nathan Martin",
    skatepark_id: 2,
    filename: "resized-nate-front-board-28th.png",
    description:
      "Nate with the go to proper frontside boardslide on the A-frame",
  },
  {
    title: "Ryan DeShazo",
    skatepark_id: 1,
    filename: "resized-texas-beach-footplant.png",
    description: "Blasting a slob-plant out of the pocket of the bowl",
  },
  {
    title: "Turtle Werline",
    skatepark_id: 3,
    filename: "resized-turtle-laurel-bowl.png",
    description: "Turtle has the best style for carving backside in the pool",
  },
  {
    title: "Turtle Weline",
    skatepark_id: 3,
    filename: "resized-turtle-laurel-bowl.png",
    description: "Turtle styling out a speedcheck on the vert ramp",
  },
];

const seedPics = () => Pic.bulkCreate(picdata);

module.exports = seedPics;
