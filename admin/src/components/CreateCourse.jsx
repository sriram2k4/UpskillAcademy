import React, {useState} from 'react';
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
import axios from "axios";
import {useRecoilValue} from "recoil";
import {adminUsername} from "../store/selectors/adminUsername.js";

const CreateCourse = () => {
	const admin = useRecoilValue( adminUsername );

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [amount, setAmount] = useState("");
	const [published, setPublished] = useState("yes");


	const handleCreateCourse = async () => {
		console.log(title);
		console.log(description);
		console.log(imageUrl);
		console.log(amount);
		console.log(published);

		const response = await axios.post(`http://localhost:3000/admin/courses`, {
			title, description, imageUrl, amount, published
		},{
			headers : {
				"Authorization" : "Bearer " + localStorage.getItem("token"),
			}
		});

		let data = response.data;

		console.log(data);
		alert("Course Added");
	}

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
					Create Course
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
						onChange={(e) => {
							setTitle(e.target.value);
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
						onChange={(e) => {
							setDescription(e.target.value);
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
						onChange={(e) => {
							setImageUrl(e.target.value);
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
							onChange={(e) => {
								setAmount(e.target.value);
							}}
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
							onChange={(e) => {
								setPublished(e.target.value);
							}}
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
						onClick={handleCreateCourse}
					>
						Create Course
					</Button>

				</Card>
			</div>

		</>
	);


};

export default CreateCourse;