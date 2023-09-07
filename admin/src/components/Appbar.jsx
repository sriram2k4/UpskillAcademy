import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Recoil
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { adminUsername } from '../store/selectors/adminUsername.js';
import { adminState } from '../store/atoms/admin.js';


const Appbar = () => {
	const admin = useRecoilValue( adminUsername );
	// console.log(admin); // Why so many refreshes
	const navigate = useNavigate();
	const setAdmin = useSetRecoilState(adminState);

	const handleLogout = () => {
		localStorage.setItem("token", null);
		setAdmin({
			isLoading: false,
			adminUsername: null
		});
		navigate('/');
	}

	if( admin ){
		return (
			<>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
						<Toolbar>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									cursor : "pointer"
								}}
								onClick={() => {
									navigate('/');
								}}
							>
								Upskill Academy
							</Typography>

							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate('/create_course');
								}}
							>Add Courses</Button>

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
								onClick={ handleLogout }
							>Sign Out</Button>

						</Toolbar>
					</AppBar>
				</Box>
			</>
		)
	}else{
		return (
			<>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
						<Toolbar>
							<Typography
								variant="h6"
								component="div"
								sx={{
									flexGrow: 1,
									cursor : "pointer"
								}}
								onClick={() => {
									navigate('/');
								}}
							>
								Upskill Academy
							</Typography>

							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate('/signup')
								}}
							>Sign Up</Button>
							<Button
								color="inherit"
								size={"large"}
								onClick={() => {
									navigate('/signin')
								}}
							>Sign In</Button>

						</Toolbar>
					</AppBar>
				</Box>
			</>
	)};

};

export default Appbar;