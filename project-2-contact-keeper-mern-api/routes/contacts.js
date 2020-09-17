const express = require('express');
const router = express.Router();

// @route   GET    api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all contact ! 😀');
});

// @route   POST    api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add new contact! 😀');
});


// @route   PUT    api/contacts/:id
// @desc    update contact 
// @access  Private
router.put('/:id', (req, res) => {
  res.send('update a contact! 😀');
});


// @route   DELETE    api/contacts/:id
// @desc    DELETE contact 
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact! 😀');
});




module.exports = router;
