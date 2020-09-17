const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator/check');
// @route   POST    api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required ❌').not().isEmpty(),
    check('email', 'Include a valid email ❌ ').isEmail(),
    check('password', 'Enter a password with 6 or more characters ❌').isLength(
      {
        min: 6,
      }
    ),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User Created ! ✅');
  }
);

module.exports = router;
