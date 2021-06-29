import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../../config/auth';
import Users from '../models/Users/entities/Users';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, config.secret);

    if (decoded.userId) {
      const user = await Users.findOne({
        where: { userId: decoded.userId },
      });

      if (!user) {
        return res.status(401).json({ error: 'Token invalid'  });
      }
    }

    req.userId = decoded.userId;
    // req.graduacao = decoded.graduacao;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
