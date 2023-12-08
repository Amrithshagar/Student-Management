const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    displayName: String,
    photoURL: String,
    email: String,
    phone: Number,
    address: Array,
    dateOfBirth: Date,
    userType: String,
  },
  { timestamps: true }
);
const addressSchema = new Schema({
  no: Number,
  street: String,
  city: String,
});

const StudentModel = mongoose.model("StudentModel", studentSchema);
module.exports = StudentModel;
