require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const authenticateJwt = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if(authHeader){
		const token = authHeader.split(' ')[1];
		jwt.verify(token, SECRET, (err, user) => {
			if(err){
				res.sendStatus(403);
			}
			req.user = user;
			next();
		})
	}else{
		res.sendStatus(403);
	}
}

module.exports = {
	authenticateJwt
}