require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { User, Admin, Course } = require('../db');
const {authenticateJwt} = require("../middleware/auth");
const router = express.Router();

/*
- POST /signup [DONE]
- POST /login [DONE]
- GET /courses - get all course [DONE]
- POST /courses/:courseId - purchase course [DONE]
- GET /purchasedCourses - get purchased course [DONE]
 */

router.post('/signup', async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	if(user){
		res.status(403).json({ message : "User already exists" });
	}else{
		const obj = { username, password };
		await User.create(obj);
		const token = jwt.sign({ username }, SECRET);
		res.json({ message : "User created successfully", token });
	}
})

router.post('/login', async (req, res) => {
	const { username, password } = req.headers;
	const user = await User.findOne({ username, password });
	if(user){
		const token = jwt.sign({ username }, SECRET);
		res.json({ message : "User logged in successfully", token });
	}else{
		res.sendStatus(403);
	}
})

// get course by Id
router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
	const id = req.params.courseId;
	const courses = await Course.findById(id);
	res.json({ courses });
})


// get all courses
router.get('/courses', authenticateJwt, async (req, res) => {
	const courses = await Course.find({ published : true });
	res.json({ courses });
})

// purchase a course
router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
	const id = req.params.courseId;
	const course = await Course.findById(id);

	if(course){
		const user = await User.findOne({ username : req.user.username});
		if(user){
			user.purchasedCourses.push(course);
			await user.save();
			res.json({ message : "Course purchased successfully"});
		}else{
			res.status(404).json({ message : "User not found" });
		}
	}else{
		res.status(404).json({ message : "Course not found" });
	}
})

router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
	const user = await User.findOne({ username : req.user.username}).populate('purchasedCourses');
	if(user){
		res.json({ purchasedCourses : user.purchasedCourses });
	}else{
		res.status(403).json({ message : "User not found" });
	}
})

module.exports = router;