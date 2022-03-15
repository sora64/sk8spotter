const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const resize = require("./resize");
const resizing = resize.resizing;
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
 
// Un-comment the following function and insert a new image's appropriate filename between the single quotes to resize that image.
resizing('chris-28th.jpg');
resizing('chris-smith-28th.jpg');
resizing('dante-28th.jpg');
resizing('deon-texas-beach.jpg');
resizing('eli-texas-beach.jpg');
resizing('front-grind-texas-beach.jpg');
resizing('gavin-28th.jpg');
resizing('josh-laurel-skatepark.png');
resizing('laurel-bowl.jpg');
resizing('nate-front-board-28th.png');
resizing('Random.png');
resizing('teak-whitewalls.JPG');
resizing('texas-beach-footplant.png');
resizing('turtle-laurel-bowl.png');
resizing('turtle-vert-laurel.jpg');
// resizing('<file-name>');


app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
