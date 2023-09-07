import React from 'react';
import Typography from "@mui/material/Typography";

const NotFound = () => {
	return (
		<div
			style={{
				height : "70vh",
				display : "flex",
				justifyContent : "center",
				alignItems : "center",
			}}
		>
			<Typography variant={"h1"}> 404 Page Not Found </Typography>
		</div>
	);
};

export default NotFound;