import Pokemon from '../entities/pokemon';


class pokemonController {
  async index(_, res) {
    const list = await Pokemon.findAll();

    return res.json(list);

  }

  async store(req, res) {
    const {name, type} = req.body;
    console.log(name, type);

      const pokemon = await Pokemon.create({
      name, type
      });

      return res.json(pokemon);
    }

  async delete(req, res) {
    const { pokemonId } = req.params;

    const response = await Pokemon.destroy({
      where: { pokemonId },
    });

    if (response[0] < 1) {
      return res.status(401).json({ message: 'Error when deleting' });
    }

    return res.json({ message: 'Successfully deleted' });
  }

  async show(req, res) {
    const { pokemonId } = req.params;

    const pokemonDate = await Pokemon.findOne({
      where: { pokemonId },
    });

    return res.json(pokemonDate)

  }

  async update(req, res) {
    const {nickname, type, pokemonId } = req.body

    const verify = await Pokemon.findOne({
      where: { pokemonId },
    });

    const response = await Users.update(
        {
          nickname: nickname === verify.nickname ? verify.nickname : nickname,
          type: type === verify.type ? verify.type : type
        },
        { where: { pokemonId } }
      );

      if (response[0] < 1) {
        return res
          .status(401)
          .json({ message: "Error update" });
      }

      return res.json({ message: "Update pokemon success" });
    }


}

export default new pokemonController();
