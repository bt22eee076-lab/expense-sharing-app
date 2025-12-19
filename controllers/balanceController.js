const Balance = require("../models/Balance");
const Group = require("../models/Group");
const Expense = require("../models/Expense");

// ------------------------------------------
// 1. GET ALL BALANCES
// ------------------------------------------
exports.getAllBalances = async (req, res) => {
    const balances = await Balance.find()
        .populate("user1")
        .populate("user2");

    res.json(balances);
};

// ------------------------------------------
// 2. GET BALANCE FOR A SINGLE USER
// ------------------------------------------
exports.getUserBalance = async (req, res) => {
    const userId = req.params.id;

    const owes = await Balance.find({ user1: userId }).populate("user2");
    const owedBy = await Balance.find({ user2: userId }).populate("user1");

    res.json({
        owes,
        owedBy
    });
};

// ------------------------------------------
// 3. GET BALANCES FOR A GROUP
// ------------------------------------------
exports.getGroupBalances = async (req, res) => {
    const { groupId } = req.params;

    // find all expenses in group
    const expenses = await Expense.find({ groupId });

    if (expenses.length === 0) {
        return res.json({ message: "No balances in this group" });
    }

    const balances = await Balance.find()
        .populate("user1")
        .populate("user2");

    res.json(balances);
};

// ------------------------------------------
// 4. SETTLE BALANCE BETWEEN TWO USERS
// ------------------------------------------
exports.settleBalance = async (req, res) => {
    const { from, to, amount } = req.body;

    let balance = await Balance.findOne({ user1: from, user2: to });

    if (balance) {
        balance.amount -= amount;

        if (balance.amount <= 0) {
            await Balance.deleteOne({ user1: from, user2: to });
            return res.json({ message: "Settled fully!" });
        }

        await balance.save();
        return res.json({ message: "Partially settled", balance });
    }

    let reverse = await Balance.findOne({ user1: to, user2: from });

    if (reverse) {
        reverse.amount += amount;
        await reverse.save();
        return res.json({ message: "Updated reverse balance", reverse });
    }

    res.json({ message: "No balance existed between users!" });
};
