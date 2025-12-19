const Expense = require("../models/Expense");
const Balance = require("../models/Balance");

exports.addExpense = async (req, res) => {
    try {
        const { amount, paidBy, participants, splitType, exactSplits, percentSplits } = req.body;

        let splits = [];

        // ---- Calculate Split ----
        if (splitType === "EQUAL") {
            let share = amount / participants.length;
            splits = participants.map(u => ({ userId: u, amount: share }));
        }

        if (splitType === "EXACT") {
            splits = exactSplits.map(s => ({ userId: s.userId, amount: s.amount }));
        }

        if (splitType === "PERCENT") {
            splits = percentSplits.map(s => ({ userId: s.userId, amount: (amount * s.percent) / 100 }));
        }

        // ---- Save Expense ----
        const expense = await Expense.create({
            amount,
            paidBy,
            groupId: req.body.groupId,
            splitType,
            splits
        });

        // ---- Update Balances ----
        for (let s of splits) {
            if (s.userId == paidBy) continue;

            await updateBalance(s.userId, paidBy, s.amount);
        }

        res.json(expense);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

async function updateBalance(from, to, amt) {
    let bal = await Balance.findOne({ user1: from, user2: to });

    if (bal) {
        bal.amount += amt;
        await bal.save();
        return;
    }

    let reverse = await Balance.findOne({ user1: to, user2: from });

    if (reverse) {
        reverse.amount -= amt;

        if (reverse.amount < 0) {
            // flip direction
            await Balance.deleteOne({ user1: to, user2: from });
            await Balance.create({ user1: from, user2: to, amount: Math.abs(reverse.amount) });
        } else if (reverse.amount === 0) {
            await Balance.deleteOne({ user1: to, user2: from });
        } else {
            await reverse.save();
        }

        return;
    }

    await Balance.create({ user1: from, user2: to, amount: amt });
}
