import React from 'react';
import Appbar from "./Appbar.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Typography";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";

const UpdateCourse = () => {

	return (
		<>
			<Appbar />
			<Grid
				container
				sx={{
					display : "flex",
					justifyContent : "center",
					marginTop : 5,
				}}
			>
				<Typography
					variant={"h4"}
					sx={{
						fontSize: {
							lg: 35,
							md: 30,
							sm: 25,
							xs: 15
						}
					}}
				>
					Update Course
				</Typography>
			</Grid>

			<div
				style={{
					display : "flex",
					justifyContent : "center",
				}}
			>
				<Card
					variant="outlined"
					style={{
						width : 400,
						padding : 30,
						margin : "20px 40px",
						textAlign : "center",
						border : "2px solid #1884b0",
						borderRadius: 5,
					}}>

					<TextField
						id="outlined-basic"
						label="Title"
						variant="outlined"
						fullWidth
						size={"small"}
						sx={{
							paddingBottom : 2,
						}}
					/>

					<TextField
						id="outlined-basic"
						label="Description"
						variant="outlined"
						fullWidth
						size={"small"}
						sx={{
							paddingBottom : 2
						}}
					/>

					<TextField
						id="outlined-basic"
						label="Image URL"
						variant="outlined"
						fullWidth
						size={"small"}
						sx={{
							paddingBottom : 2
						}}
					/>

					<TextField
						id="outlined-basic"
						label="Image URL"
						variant="outlined"
						fullWidth
						size={"small"}
						sx={{
							paddingBottom : 2
						}}
					/>

					<FormControl
						fullWidth
						size={"small"}
						sx={{
							paddingBottom : 2
						}}
					>
						<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
						<OutlinedInput
							id="outlined-adornment-amount"
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
							label="Amount"
						/>
					</FormControl>

					<FormControl
						size={"small"}
						fullWidth
						sx={{
							paddingBottom : 2
						}}
					>
						<InputLabel id="demo-simple-select-helper-label">Is Published</InputLabel>
						<Select
							defaultValue={"yes"}
							displayEmpty
							label="Is Published"
						>
							<MenuItem value={"yes"}>Yes</MenuItem>
							<MenuItem value={"no"}>No</MenuItem>
						</Select>
					</FormControl>

					<Button
						variant="contained"
						size={"large"}
						sx={{
							marginTop : 1,
						}}
					>
						Update Course
					</Button>

				</Card>
			</div>

		</>
	);
};

export default UpdateCourse;