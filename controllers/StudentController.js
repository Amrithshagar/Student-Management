const { response } = require("express");
const StudentModel = require("../models/StudentModel");

//show the list of students
const index = (req, res, next) => {
  StudentModel.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

//add a new student
const create = (req, res, next) => {
  let student = new StudentModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    displayName: req.body.displayName,
    photoURL: req.body.photoURL,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
    userType: req.body.userType,
  });
  student
    .save()
    .then((response) => {
      res.json({
        message: "Student details saved successfuly",
      });
    })
    .catch((error) => {
      res.json({
        message: "an error occured!",
        error: error.message,
      });
    });
};

//update a student's detail
const update = (req, res, next) => {
  let studentID = req.body.studentID;

  let updatedData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    displayName: req.body.displayName,
    photoURL: req.body.photoURL,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
    userType: req.body.userType,
  };

  StudentModel.findByIdAndUpdate(studentID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "Student updated successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occurred!",
      });
    });
};

//remove student by ID
const destroy = (req, res, next) => {
  let studentID = req.body.studentID;
  StudentModel.findByIdAndDelete(studentID)
    .then((response) => {
      res.json({
        message: "Student removed successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "an error occurred!",
      });
    });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
