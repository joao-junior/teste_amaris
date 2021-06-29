import jwt from 'jsonwebtoken';
import Sequelize from 'sequelize';
import authConfig from '../../../../config/auth';
import Users from '../../Users/entities/Users';
import database from '../../../../config/database';

const sequelize = new Sequelize(database);

class SessionController {
  async store(req, res) {
    const { mail, password } = req.body;

    const user = await Users.findOne({
      where: { mail },
    });

    if (!user) {
      return res.status(401).json({ message: 'User Not Found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Password not match' });
    }

    const { userId, nickname } = user;

    return res.json({
      nickname,
      mail,
      token: jwt.sign({ userId }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });

  }
}

export default new SessionController();
