import React from 'react';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Appbar from "./Appbar.jsx";


const Signup = () => {
	return (
		<>
			<Appbar />
			<Grid
				sx={{
					display : "flex",
					justifyContent : "center",
					marginTop : 15,
				}}
			>
				<Typography
					variant={"h5"}
					sx={{
						fontSize: {
							lg: 35,
							md: 30,
							sm: 25,
							xs: 15
						}
					}}
				>Sign In as User below!</Typography>
			</Grid>

			<Grid
				container
				sx={{
					display : "flex",
					justifyContent : "center"
				}}
			>

				<Card
					style={{
						width : 400,
						padding : 30,
						margin : "20px 40px",
						textAlign : "center"
					}}>

					<TextField
						id="outlined-basic"
						label="Username"
						variant="outlined"
						fullWidth
						sx={{
							paddingBottom : 2,
						}}
					/>

					<TextField
						id="outlined-basic"
						label="Password"
						variant="outlined"
						fullWidth
						sx={{
							paddingBottom : 2
						}}
					/>

					<Button
						variant="contained"
					>
						Sign In
					</Button>

					<Typography
						variant={"h5"}
						sx={{
							paddingTop : 2,
							fontSize: {
								lg: 20,
								md: 30,
								sm: 25,
								xs: 15
							}
						}}
					> Click below to Sign up </Typography>

					<Button
						variant="contained"
						color="error"
						// size={"small"}
						sx={{
							marginTop : 1,
						}}
					>
						Sign Up
					</Button>

				</Card>
			</Grid>

		</>
	);
};

export default Signup;