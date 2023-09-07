import React, {useState} from 'react';
import Appbar from "./Appbar.jsx";
import CourseForm from "./CourseForm.jsx";
import NotFound from "./NotFound.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import axios from "axios";

const CreateCourse = () => {
	const userName = localStorage.getItem("username");
	return (
		<>
			<Appbar />
			{ (userName !== "null")  && <CourseForm />};
			{userName === "null" && <NotFound />};
		</>
	);


};

export default CreateCourse;