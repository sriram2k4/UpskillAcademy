const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require('./routes/admin.js');
const userRouter = require('./routes/user.js');
const app = express();
const port = 3000

// Middle Wares
app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose.connect('mongodb://localhost:27017/backend');

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})