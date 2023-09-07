import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";


const Appbar = () => {
	const navigate = useNavigate();
	const username = localStorage.getItem("username");

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
									navigate('/create_course');
								}}
							>Courses</Button>

							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate('/courses');
								}}
							>Purchased Course</Button>

							<Button
								color="inherit"
								size={"large"}
								// onClick={ handleLogout }
							>Sign Out </Button>
						</Toolbar>
					</AppBar>
				</Box>
			</>
		);
	}

};

export default Appbar;