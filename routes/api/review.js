const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Review = require('../../models/Review');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  auth,
  check('text', 'Text is required').notEmpty(),
  async (req, res) => {

    try {
      const user = await User.findById(req.user.id);
      const newReview = new Review({
        ...req.body,
        user: req.user.id
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get(
  '/',
  async (req, res) => {

    try {
      Review.find()
        .then(reviews => {
          res.json(reviews)
        })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get(
  '/init/:id',
  async (req, res) => {
    let num = req.params.id;

    let total = await Review.aggregate([
        { $match: { num } },
        { $group: { _id: null, sum: { $sum: "$rating" } } }
    ])

    let count = await Review.find({num}).countDocuments();
    let rating5 = await Review.find({num, rating:5}).countDocuments();
    let rating4 = await Review.find({num, rating:4}).countDocuments();
    let rating3 = await Review.find({num, rating:3}).countDocuments();
    let rating2 = await Review.find({num, rating:2}).countDocuments();
    let rating1 = await Review.find({num, rating:1}).countDocuments();

    Review.find({num}).populate("user", "name")
      .then(reviews => {
        res.json({
          reviews,
          total,
          count,
          ratingcount: [rating5, rating4, rating3, rating2, rating1]
        })
      })
  }
);

module.exports = router;
