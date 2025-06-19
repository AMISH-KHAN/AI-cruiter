const mongoose = require("mongoose")

const Schema = mongoose.Schema

const RecruiterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true,
    },
    role: {
        type: String,
        default:"recruiter"
    },
    companyName: {
        type: String,
        required:true,
    },
    designation: {
        type: String,
        required:true,
    },


})

const recruiter = mongoose.model("Recruiterschema", RecruiterSchema)

module.exports=recruiter