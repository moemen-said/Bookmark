const express = require('express');

const storeController = require('../controllers/store');
const checkAuth = require('../middlewares/checkAuth');

const router = express.Router();

router.get('/books/:bookId', storeController.getBook)
router.get('/books', storeController.getBooks)

router.post('/addToCart',checkAuth, storeController.addToCart)
router.get('/removeFromCart/:bookId', checkAuth, storeController.removeFromCart)
router.get('/clearCart', checkAuth, storeController.clearCart)

module.exports = router;