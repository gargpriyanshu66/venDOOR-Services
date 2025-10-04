const mongoose = require("mongoose");


// connect db
// mongoose.connect("mongodb+srv://arshdeepsamra3496:arsh1234@cluster0.vge73ko.mongodb.net/hvac").then(() => {
mongoose.connect("mongodb://127.0.0.1:27017/hvac").then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log("Error in database", err);  
})