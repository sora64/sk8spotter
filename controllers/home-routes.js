const router = require("express").Router();
const { Skatepark, User, Pic, Comment } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all skateparks for homepage
router.get("/", async (req, res) => {
  try {
    const dbSkateparkData = await Skatepark.findAll({
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'skatepark_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Pic,
          attributes: ["filename", "description"],
        },
      ],
    });

    const skateparks = dbSkateparkData.map((skatepark) =>
      skatepark.get({ plain: true })
    );

    console.log(skateparks);

    res.render("homepage", {
      skateparks,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one skatepark
// Use the custom middleware before allowing the user to access the skatepark
router.get("/skatepark/:id", withAuth, async (req, res) => {
  try {
    const dbSkateparkData = await Skatepark.findByPk(req.params.id, {
      include: [
        {
          model: Pic,
          attributes: ["id", "title", "filename", "description"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "skatepark_id", "user_id", 'created_at'],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    const skatepark = dbSkateparkData.get({ plain: true });
    res.render("skatepark", { skatepark, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one image
// Use the custom middleware before allowing the user to access the image
router.get("/pic/:id", withAuth, async (req, res) => {
  try {
    const dbPicData = await Pic.findByPk(req.params.id);

    const pic = dbPicData.get({ plain: true });

    res.render("pic", { pic, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
