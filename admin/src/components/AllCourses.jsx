import React, {useEffect, useState} from 'react';
import axios from "axios";
import CourseCard from "./CourseCard.jsx";
import Appbar from "./Appbar.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useRecoilValue} from "recoil";
import {adminUsername} from "../store/selectors/adminUsername.js";

const AllCourses = () => {
	const admin = useRecoilValue( adminUsername );
	const [courses, setCourses] = useState([]);

	const init = async () => {
		const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/courses/publisher/${admin}`, {
			headers : {
				"Authorization" : "Bearer " + localStorage.getItem("token")
			}
		});

		let data = response.data.courses;
		// console.log(data);
		setCourses(data);
	}

	useEffect(() => {
		init();
	}, []);

	return (
		<>
			<Appbar />

				<Typography
					variant={"h4"}
					sx={{
						display : "flex",
						justifyContent : "center",
						marginTop : 2,
						fontSize: {
							lg: 35,
							md: 30,
							sm: 25,
							xs: 15
						}
					}}
				>My Courses</Typography>

			<div
				style={{
					display : "flex",
					justifyContent : "center",
				}}
			>
				<Grid
					container
					sx={{
						display : "flex",
						justifyContent : "center",
						marginTop : 2,
						maxWidth : 1000
					}}
				>

				    {courses.map(course => {
				      return (
					      <Grid item lg={4} md={6} xs={12}
					            sx={{
						            display : "flex",
						            justifyContent : "center"
					            }}
					            key={course._id}
					      >
								<CourseCard course={course}/>
					      </Grid>
				      )
				    })}

				</Grid>
			</div>


		</>
	);

	// return (
	// 	<>
	// 	<Appbar />
	// 	<div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
	// 		{courses.map(course => {
	// 			return <CourseCard course={course}/>
	// 		})}
	// 	</div>
	// 	</>
	// );
};

export default AllCourses;