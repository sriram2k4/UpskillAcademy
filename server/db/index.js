const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	purchasedCourses : [ { type : mongoose.Schema.Types.ObjectId, ref : "Course"}]
})

const AdminSchema = new mongoose.Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	}
})

const CourseSchema = new mongoose.Schema({
	title : String,
	description : String,
	price : Number,
	imageLink : String,
	published : Boolean,
	publishedBy : String,
})

const User = mongoose.model("User", UserSchema);
const Admin = mongoose.model("Admin", AdminSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
	User,
	Admin,
	Course
}
