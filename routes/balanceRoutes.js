const express = require("express");
const { 
    getAllBalances, 
    getUserBalance, 
    getGroupBalances, 
    settleBalance 
} = require("../controllers/balanceController");

const router = express.Router();

router.get("/", getAllBalances);                      // All balances
router.get("/user/:id", getUserBalance);             // User balances
router.get("/group/:groupId", getGroupBalances);     // Group balances
router.post("/settle", settleBalance);               // Settle dues

module.exports = router;
