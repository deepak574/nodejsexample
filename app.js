const express = require('express');
const app = express();
app.get('/',(req,res) => {
	res.send("Hello World, I am from Docker");
});
app.listen(3040,() => {
	console.log("Server is running on port 3040")
});
