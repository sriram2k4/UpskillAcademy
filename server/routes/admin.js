require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const router = express.Router();
const { User, Admin, Course } = require('../db');
const { authenticateJwt } = require('../middleware/auth');


/*
- GET /me [DONE]
- POST /signup [DONE]
- POST /login [DONE]
- POST /courses - create course [DONE]
- PUT /courses/:courseId - update course by id [DONE]
- GET /courses - get all course [DONE]
- GET /courses/:courseId - get single course by id [DONE]
- DELETE /courses/:courseID - Delete course by ID [DONE]
 */

router.get('/me',authenticateJwt, async (req, res) => {
	const admin = await Admin.findOne({ username : req.user.username});
	if(!admin){
		res.status(403).send("Admin doesn't exist");
		return;
	}
	res.json({ username : admin.username});
})

router.post('/signup', async (req, res) => {
	const { username, password } = req.body;
	const admin = await Admin.findOne({ username });

	console.log(admin);

	if(admin){
		res.status(403).json({message : "Admin already exists"});
	}else{
		const obj = { username, password };
		await Admin.create(obj);
		const token = jwt.sign({ username }, SECRET);
		res.json({message : "Admin created successfully", token});
	}

})

router.post('/login', async (req, res) => {
	const { username, password } = req.headers;
	const admin = await Admin.findOne({ username, password});
	if(admin){
		const token = jwt.sign({ username }, SECRET);
		res.json({ message : "Logged in successfully", token});
	}else{
		res.status(403).json({ message : "Invalid Credentials"});
	}
})

// Create course
router.post('/courses', authenticateJwt, async (req, res) => {
	const course = req.body;
	await Course.create(course);
	res.json({ message : "Course created successfully", courseId: course.id});
})

// Update Course
router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
	const id = req.params.courseId;
	const course = await Course.findByIdAndUpdate(id, req.body, { new : true });
	if(course){
		res.json({ message : "Course updated successfully" });
	}else{
		res.status(404).json({ message : "Course not found" });
	}
	console.log("course");
})

// Get all courses
router.get('/courses', authenticateJwt, async (req, res) => {
	const courses = await Course.find({});
	res.json({ courses });
})

// Get course by ID
router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
	const id = req.params.courseId;
	const course = await Course.findById(id);
	res.json(course);
})


// Get course by publisherUsername
router.get('/courses/publisher/:publisherUsername', authenticateJwt, async (req, res) => {
	const publishedBy = req.params.publisherUsername;
	const courses = await Course.find({ publishedBy });
	res.json({ courses });
})

// // Delete course by ID
router.delete('/courses/:courseId', authenticateJwt, async (req, res) => {
	const id = req.params.courseId;
	const course = await Course.findByIdAndDelete(id);
	if(course){
		res.json({ message : "Course Deleted successfully" });
	}else{
		res.status(404).json({ message : "Course not found" });
	}
	console.log("course");
})

module.exports = router;

