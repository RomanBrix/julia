//Monogo User Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
    {
        title: { type: String, default: "" },
        photo: { type: String, default: "" },
        desc: { type: String, default: "" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("News", NewsSchema);
