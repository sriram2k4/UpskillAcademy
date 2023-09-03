import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


const CourseCard = () => {
	return (
		<Card
			style={{
				width : 300,
				margin : "15px 0",
				padding : 0,
			}}
		>
			<CardMedia
				component="img"
				alt="course"
				height="140"
				image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
			/>

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Photography Course
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>

			<CardActions
				sx={{
					paddingBottom : 2
				}}
			>

				<Button
					variant={"contained"}
					size="small"
					color={"success"}
				>Update</Button>

				<Button
					variant={"contained"}
					size="small"
					color={"error"}
				>Delete</Button>
			</CardActions>

		</Card>
	);
};

export default CourseCard;