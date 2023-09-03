import React from 'react';
import Box from '@mui/material/Box';
import Appbar from './Appbar.jsx';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CourseCard from "./CourseCard.jsx";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CoursePage = () => {
	return (
		<>
			<Appbar />

			<Box
				sx={{
					height : "10vh",
					backgroundColor: '#312F2E',
					margin : 0,
					display: "flex",
					justifyContent: "center",
					alignItems : "center"
				}}
			>

				<Typography
					// variant={"h5"}
					sx={{
						color : "white",
						marginTop : {
							lg : 0,
							sm : 4
						},
						fontSize: {
							lg: 35,
							md: 30,
							sm: 25,
							xs: 15
						}
					}}
				>The Ultimate Photography Course</Typography>

			</Box>

			<div
				style={{
					height : "80vh",
					display : "flex",
					justifyContent : "center",
					alignItems : "center"
				}}
			>
				<Grid
					container
					sx={{
						display : "flex",
						alignItems : "center",
						textAlign : "center",
						minHeight : "50vh",
						width : 1000
					}}
				>

					<Grid item lg={6} xs={12}
						sx={{
							display : "flex",
							justifyContent : "center",
						}}
					>

						<Card
							sx={{
								width : "60vw",
							}}

						>
							<CardMedia
								component="img"
								alt="course"
								image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
							/>

						</Card>

					</Grid>

					<Grid
						item
						lg={6}
						xs={12}
						sx={{
							padding : 2
						}}
					>

						<Typography
							paragraph
						>End to End About Photograhy will be taught in this course.</Typography>

						<Button
							variant={"contained"}
							sx={{
								marginTop : "2vh",
							}}
						>
							Buy Course
						</Button>
					</Grid>

				</Grid>
			</div>



		</>
	);
};

export default CoursePage;