const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            minLength: 3,
            maxLength: 20,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            require: true
        },
        phoneNumber:{
            type: Number,
            require: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("employee", employeeSchema);