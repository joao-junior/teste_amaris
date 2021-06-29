import { Model, DataTypes } from 'sequelize';

class pokemons extends Model {
  static init(sequelize) {
    super.init(
      {
        pokemonId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default pokemons;
