import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import axios from "axios";

const CourseCard = (props) => {
	const navigate = useNavigate();

	return (
		<Card
			style={{
				margin: 10,
				width: 300,
				minHeight: 200,
				padding: 20
			}}
		>
			<CardMedia
				component="img"
				alt="course"
				height="140"
				image={props.course.imageLink}
			/>

			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.course.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.course.description}
				</Typography>
				<Typography
					variant="h5"
					sx={{
						paddingTop : 2,
						display : "flex",
						justifyContent : "center",
					}}
				>
					${props.course.price}
				</Typography>
			</CardContent>

			<CardActions
				sx={{
					display : "flex",
					justifyContent : "center",
				}}
			>
				<Button
					variant={"contained"}
					size="small"
					color={"success"}
					onClick={() => {
						navigate(`/courses/${props.course._id}`);
					}}
				> Purchase Course </Button>
			</CardActions>

			<Typography
				ariant="body2"
				color="text.secondary"
				sx={{
					textAlign : "center"
				}}
			>
				Publisher : {props.course.publishedBy}
			</Typography>

		</Card>
	);
};

export default CourseCard;