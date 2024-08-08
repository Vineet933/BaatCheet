const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    users: Array, // Assuming users are identified by their IDs or usernames
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Corrected from `TransformStreamDefaultController`
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Message", messageSchema);

