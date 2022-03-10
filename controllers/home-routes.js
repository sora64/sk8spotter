const router = require('express').Router();
const { Skatepark, Image } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all skateparks for homepage
router.get('/', async (req, res) => {
  try {
    const dbSkateparkData = await Skatepark.findAll({
      include: [
        {
          model: Skatepark,
          attributes: ['name', 'description'],
        },
      ],
    });

    const skateparks = dbSkateparkData.map((skatepark) =>
      skatepark.get({ plain: true })
    );

    res.render('homepage', {
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
router.get('/skatepark/:id', withAuth, async (req, res) => {
  try {
    const dbSkateparkData = await Skatepark.findByPk(req.params.id, {
      include: [
        {
          model: Image,
          attributes: [
            'id',
            'title',
            'filename',
            'description',
          ],
        },
      ],
    });

    const skatepark = dbSkateparkData.get({ plain: true });
    res.render('skatepark', { skatepark, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one image
// Use the custom middleware before allowing the user to access the image
router.get('/image/:id', withAuth, async (req, res) => {
  try {
    const dbSkateparkData = await Image.findByPk(req.params.id);

    const image = dbSkateparkData.get({ plain: true });

    res.render('image', { image, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
