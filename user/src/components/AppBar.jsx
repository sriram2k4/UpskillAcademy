import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {userState} from "../store/atoms/user.js";


const Appbar = () => {
	const navigate = useNavigate();
	const setUser = useSetRecoilState(userState);
	let username = localStorage.getItem("username");
	if(!username){
			localStorage.setItem("username", "null");
			username = localStorage.getItem("username");
	}

	const handleLogout = () => {
		setUser({
			isLoading: false,
			userName: null
		});
		localStorage.setItem("token", null);
		localStorage.setItem("username", null);
		navigate('/');
	}

	if(username === "null"){
		return (
			<>
				<Box sx={{
					flexGrow: 1
				}}>
					<AppBar position="static">
						<Toolbar>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									cursor : "pointer"
								}}
								onClick={() => { navigate('/') }}
							>
								Upskill Academy
							</Typography>
							<Button
								color="inherit"
								size={"large"}
				        onClick={() => {
									navigate("/signup")
				        }}
							>Sign Up</Button>
							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate("/signin")
								}}
							>Sign In</Button>
						</Toolbar>
					</AppBar>
				</Box>
			</>
		);
	} else {
		return (
			<>
				<Box sx={{
					flexGrow: 1
				}}>
					<AppBar position="static">
						<Toolbar>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									cursor : "pointer"
								}}
								onClick={() => { navigate('/') }}
							>
								Upskill Academy
							</Typography>
							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate('/courses');
								}}
							>Courses</Button>

							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate('/courses/purchased_courses');
								}}
							>Purchased Course</Button>

							<Button
								color="inherit"
								size={"large"}
								onClick={ handleLogout }
							>Sign Out </Button>
						</Toolbar>
					</AppBar>
				</Box>
			</>
		);
	}

};

export default Appbar;