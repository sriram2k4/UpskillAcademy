import React from 'react';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Appbar from "./Appbar.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState} from "react";

import {useSetRecoilState} from "recoil";
import {adminState} from "../store/atoms/admin.js";

const Signup = (key, value) => {
	const setAdmin = useSetRecoilState(adminState);
	const navigate = useNavigate();

	const [ username , setUsername] = useState("");
	const [ password , setPassword] = useState("");

	const handleSignupClick =  async () => {
		const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/signup`, {
			username: username,
			password: password
		});
		let data = response.data;
		setAdmin({ isLoading: false, adminUsername: username });
		localStorage.setItem("token", data.token);
		localStorage.setItem("username", username);
		navigate("/");
	}

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
				>Signup up as Admin below!</Typography>
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
						onChange={(e) => {
							setUsername(e.target.value);
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
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>

					<Button
						variant="contained"
						onClick = { handleSignupClick }
					>
						Sign up
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
					> Already an Admin? </Typography>

					<Button
						variant="contained"
						color="error"
						// size={"small"}
						sx={{
							marginTop : 1,
						}}
						onClick={() => {
							navigate('/signin')
						}}
					>
						Sign In
					</Button>

				</Card>
			</Grid>

		</>
	);
};

export default Signup;