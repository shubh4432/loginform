const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getMe = (req, res, next) => {
  console.log(res.locals);
    req.params.id = req.user._id;
    next();
  };
  
const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    console.log(req);
    let query = Model.findById(req.params.id);
    // if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc
      }
    });
  });

exports.getUser = getOne(User);
