import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Users from '../app/models/Users/entities/Users';
import Pokemon from '../app/models/Pokemon/entities/pokemon';

const models = [
  Users,
  Pokemon,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
