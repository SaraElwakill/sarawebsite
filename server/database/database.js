/** @format */

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const connectDb = async () => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

module.exports = connectDb;
