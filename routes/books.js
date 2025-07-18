const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

router.get('/', getAllBooks);
router.get('/:id', getBookById);

router.post('/', auth, createBook);
router.patch('/:id', auth, updateBook);
router.delete('/:id', auth, deleteBook);

module.exports = router;