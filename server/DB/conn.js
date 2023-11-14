const mongoose = require('mongoose');
const mongoUrl = process.env.SECRET_KEY;

mongoose.connect(mongoUrl).then(() => {
    console.log("Connected..");
}).catch((err) => {
    console.log(err)
});


module.exports 