const Group = require("../models/Group");

exports.createGroup = async (req, res) => {
    try {
        const group = await Group.create(req.body);
        res.json(group);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
