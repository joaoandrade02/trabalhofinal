// index: criando um método que vai retornar listagem de sessões
// show: listar uma única sessão
// store: criar uma sessão
// update: alterar uma sessão
// destroy: deletar uma sessão

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }

    if (!(await user.compareHash(senha))) {
      return res.json({ error: "Invalid password." });
    }

    const { _id } = user;

    return res.json({
      user: { _id, email },
      token: User.generateToken(user)
    });
  }
};
