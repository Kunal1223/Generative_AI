const express = require("express");
const router = express.Router();
const User = require('../module/UserScema');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

router.post('/createuser',
  ([
    body('email', 'incorrect formate').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 })
  ])

  , async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }

    const salt = await bcrypt.genSalt(10);
    const cpassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: cpassword,
        phone: req.body.phone,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  });
 
// *******************login part is here***********************************************
const KEY = process.env.KEY;
router.post('/loginuser',
  ([
    body('email', 'incorrect formate').isEmail(),
    body('password', 'minimum 5 char').isLength({ min: 5 }),
  ]),

  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
    }
    const email = req.body.email;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        res.json({ success: false, message: "Please enter valid data" });
        return;
      }

      const compassword = await bcrypt.compare(req.body.password, userData.password);
      if (!compassword) {
        res.json({ success: false, message: "Please enter valid data" });
        return;
      }

      // ********** i am tring to pass username directly using a props***********
      // ******generating the authtoken here**********************
      const data = {
        user: {
          id: userData.id
        }
      }
      
      const authToken = jwt.sign(data, KEY);
      return res.json({ success: true, authToken: authToken , name : userData.name});

    } catch (err) {
      console.log(err);
      res.json({ success: false, message: "An error occurred" });
    }
  });

module.exports = router;

