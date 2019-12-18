const User = require("../models/User");

module.exports = {
  async store(req, res) {

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  },
  async list(req, res) {
    const users = await User.find({});

    return res.json(users);
  }
};