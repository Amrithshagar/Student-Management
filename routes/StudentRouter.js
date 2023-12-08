const express = require("express");
const router = express.Router();
const studentValidator = require("../validation/StudentValidator");
const StudentController = require("../controllers/StudentController");
const { validate } = require("express-validation");

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API operations for managing students
 */

/**
 * @swagger
 * /api/StudentRouter:
 *   get:
 *     summary: Get a list of all students.
 *     tags: [Students]
 *     responses:
 *       '200':
 *         description: A list of students.
 *         content:
 *           application/json:
 *             example:
 *               message: List of students retrieved successfully.
 */

/**
 * @swagger
 * /api/StudentRouter/create:
 *   post:
 *     summary: Create a new student.
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             firstName: Bob
 *             lastName: Fedrick
 *             displayName: Bobby
 *             photoURL: URL
 *             email: bobby123@email.com
 *             phone: 654321987
 *             address:
 *               - no: 32
 *                 street: west street
 *                 city: colarado
 *             dateOfBirth: "1996-08-18T14:10:30Z"
 *             userType: major
 *     responses:
 *       '200':
 *         description: Student created successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: Student created successfully.
 *       '400':
 *         description: Bad request. Invalid input.
 */

/**
 * @swagger
 * /api/StudentRouter/update:
 *   post:
 *     summary: Update an existing student.
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             firstName: Bob
 *             lastName: Fedrick
 *             displayName: Bobby
 *             photoURL: URL
 *             email: bobby123@email.com
 *             phone: 654321987
 *             address:
 *               - no: 32
 *                 street: west street
 *                 city: colarado
 *             dateOfBirth: "1996-08-18T14:10:30Z"
 *             userType: major
 *     responses:
 *       '200':
 *         description: Student updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: Student updated successfully.
 *       '404':
 *         description: Student not found.
 */

/**
 * @swagger
 * /api/StudentRouter/destroy:
 *   post:
 *     summary: Delete a student.
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: 6571acb3c3592c9129416f8f
 *     responses:
 *       '200':
 *         description: Student deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: Student deleted successfully.
 *       '404':
 *         description: Student not found.
 */

router.get("/", StudentController.index);
router.post(
  "/create",
  validate(studentValidator.createOrUpdateStudentValidator),
  StudentController.create
);
router.post(
  "/update",
  validate(studentValidator.createOrUpdateStudentValidator),
  StudentController.update
);
router.post("/destroy", StudentController.destroy);

module.exports = router;
