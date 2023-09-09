import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Appbar from './Appbar.jsx';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CourseCard from "./CourseCard.jsx";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const CoursePage = () => {
	const navigate = useNavigate();
	const { courseId } = useParams();
	const [courses, setCourses] = useState([]);
	const [purchasedCourses, setPurchasedCourses] = useState([]);
	const [isPurchased, setIsPurchased] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const init = () => {
		axios.get(`${import.meta.env.VITE_BASE_URL}/user/courses/${courseId}`, {
			headers : {
				"Authorization" : "Bearer " + localStorage.getItem("token"),
			}
		})
		.then((res) => {
			setCourses(res.data.courses);
		})
		.catch((err) => console.log(err));

		axios.get(`${import.meta.env.VITE_BASE_URL}/user/purchasedCourses`,{
			headers : {
				"Authorization" : "Bearer " + localStorage.getItem("token")
			}
		}).then((res) => {
			setPurchasedCourses(res.data.purchasedCourses);
		}).catch((err) => console.log(err));
	}

	useEffect(() => {
		init();
	}, [ courseId ]);

	useEffect(() => {
		const result = purchasedCourses.some((item) => item._id === courseId);
		setIsPurchased(result);
		setIsLoading(false);
	}, [courseId, purchasedCourses]);

	const handlePurchase = async () => {
		const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/courses/${ courseId }`, {}, {
			headers : {
				"Authorization" : "Bearer " + localStorage.getItem("token")
			}
		});
		alert("Course Purchased!");
		navigate('/courses')
	}

	return (
		<>
			<Appbar />

			{isLoading &&
				<>
					<Typography
						variant={"h4"}
						sx={{
							display : "flex",
							justifyContent : "center",
							marginTop : 5,
						}}
					> Loading.... </Typography>
				</>
			}

			{!isLoading && !isPurchased &&
				<>
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
						>{ courses.title }</Typography>

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
										image={ courses.imageLink }
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
									variant={"h4"}
									paragraph
								>{ courses.description }</Typography>

								<Typography
									variant={"h4"}
									sx={{
										color : "blue"
									}}
								>${ courses.price }</Typography>

								<Button
									variant={"contained"}
									color={"success"}
									sx={{
										marginTop : "2vh",
									}}
									onClick={ handlePurchase }
								>
									Purchase Course
								</Button>
							</Grid>

						</Grid>
					</div>
				</>
			}

			{!isLoading && isPurchased &&
				<>
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
						>{ courses.title }</Typography>

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
										image={ courses.imageLink }
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
									variant={"h4"}
									paragraph
								>{ courses.description }</Typography>

								<Typography
									variant={"h4"}
									sx={{
										color : "blue"
									}}
								>${ courses.price }</Typography>

								<Button
									variant={"contained"}
									sx={{
										marginTop : "2vh",
									}}
									disabled
									onClick={ handlePurchase }
								>
									Course Purchased
								</Button>
							</Grid>

						</Grid>
					</div>
				</>
			}





		</>
	);
};

export default CoursePage;