import React from 'react';
import Appbar from "./Appbar.jsx";
import CourseCard from "./CourseCard.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AllCourses = () => {
	return (
		<>
			<Appbar />
			<Grid
				container
				sx={{
					display : "flex",
					justifyContent : "center",
					marginTop : 2,
				}}
			>
				<Typography
					variant={"h4"}
					sx={{
						fontSize: {
							lg: 35,
							md: 30,
							sm: 25,
							xs: 15
						}
					}}
				>
					Available Courses
				</Typography>
			</Grid>

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
				<Grid item lg={4} md={6} xs={12}
					sx={{
						display : "flex",
						justifyContent : "center"
					}}
				>
					<CourseCard />
				</Grid>

				<Grid item lg={4} md={6} xs={12}
				      sx={{
					      display : "flex",
					      justifyContent : "center"
				      }}
				>
					<CourseCard />
				</Grid>

				<Grid item lg={4} md={6} xs={12}
				      sx={{
					      display : "flex",
					      justifyContent : "center"
				      }}
				>
					<CourseCard />
				</Grid>

				<Grid item lg={4} md={6} xs={12}
				      sx={{
					      display : "flex",
					      justifyContent : "center"
				      }}
				>
					<CourseCard />
				</Grid>

			</Grid>
		</div>


		</>
	);
};

export default AllCourses;