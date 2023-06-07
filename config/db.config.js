const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log("Database connected"))
        .catch((error) => console.log(error))
}