import { Model, DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';


class users extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        nickname: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        mail: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        pass: {
          type: DataTypes.VIRTUAL,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default users;
