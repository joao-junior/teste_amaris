import Users from "../entities/Users";

class UsersController {
  async index(_, res) {
    const user = await Users.findAll();

    return res.json(user);
  }

  async store(req, res) {
    const { nickname, mail, password } = req.body;

    const userExist = await Users.findOne({
      where: { mail },
    });

    if (userExist) {
      return res.status(401).json({
        message: `Email: ${mail} already exists`,
      });
    }

    const user = await Users.create({
      nickname,
      mail,
      password,
    });

    return res.json(user);
  }

  async update(req, res) {
    const userId = req.userId;
    const {nickname, mail, password} = req.body

    const verify = await Users.findOne({
      where: { userId },
    });

    const response = await Users.update(
        {
          nickname: nickname === verify.nickname ? verify.nickname : nickname,
          mail: mail === verify.mail ? verify.mail : mail,
          password: password ===  verify.password ? verify.password : password 
        },
        { where: { userId } }
      );

      if (response[0] < 1) {
        return res
          .status(401)
          .json({ message: "Error update" });
      }

      return res.json({ message: "Update user success" });
    }
}

export default new UsersController();
