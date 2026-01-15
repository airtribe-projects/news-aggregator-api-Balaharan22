const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const newsController = require('../controllers/news');

router.get('/', auth, newsController.getNews);

module.exports = router;
