const mongoose = require("mongoose");

const BusinessInformationSchema = new mongoose.Schema({
    BusinessName: {
        type: String,
        required: true,
        minlength: 3,
    },
    BusinessCaption: {
        type: String,
        required: true,
        minlength: 3,
    },
    BusinessDescription: {
        type: String,
        minlength: 3,
        required: true,
    },
    BusinessLocationLatitude: {
        type: Number,
        required: true,
    },
    BusinessLocationLongitude: {
        type: Number,
        required: true,
    },
    CreatedTime: {
        type: String,
        required: true,
    },
    EmailID: {
        type: String,
        required: true,
    }

}, {
    versionKey: false
});

const BusinessInformationModel = mongoose.model(
    "BusinessInformationModel",
    BusinessInformationSchema
);

module.exports = BusinessInformationModel;
