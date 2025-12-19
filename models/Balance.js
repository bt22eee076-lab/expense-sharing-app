const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: Number  // user1 owes user2 this much
});

module.exports = mongoose.model("Balance", balanceSchema);
