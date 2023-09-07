import React from 'react';
import Appbar from './Appbar.jsx';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const username = localStorage.getItem("username");

	return (
		<>
			<Appbar />
			<Grid
				container
				sx={{
					minHeight : "80vh",
					display : "flex",
					alignItems : "center"
				}}
			>
				<Grid
					item
					xs={12}
					md={5}
					sx={{
						display : "flex",
						justifyContent : "center",
						textAlign : "center",
						alignItems : "center"
					}}
				>
					<div>
						<Typography
							variant={"h3"}
						>User Dashboard</Typography>

						{(username === "null") && <Button
							variant={"contained"}
							sx={{
								marginTop: 2,
							}}
							size={"large"}
							onClick={() => {
								navigate("/signup")
							}}
						>Sign Up</Button>}

						{(username !== "null") && <Button
							variant={"contained"}
							sx={{
								marginTop: 2,
							}}
							size={"large"}
							onClick={() => {
								navigate("/courses")
							}}
						>View Courses</Button>}

					</div>
				</Grid>
				<Grid
					item
					xs={12}
					md={7}
					sx={{
						display : "flex",
						justifyContent : "center",
					}}
				>
					<img src={"https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1800&t=st=1693476548~exp=1693477148~hmac=48693fb876761349a9553b8cc207e077fd19bf1c5f8fc69462ca8ac1d97d5ff8"} alt={"Image.png"}
					     style={{
						     maxWidth : "100%",
						     height : "auto",
						     padding : 0,
						     margin : 0
					     }}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Home;