const express = require('express');

const storeController = require('../controllers/store');

const router = express.Router();

router.get('/books/:bookId', storeController.getBook)

module.exports = router;