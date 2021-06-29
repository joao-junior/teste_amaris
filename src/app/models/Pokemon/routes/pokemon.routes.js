import { Router } from 'express';
import PokemonController from '../controllers/pokemonController';
import authMiddlewares from '../../../middlewares/auth';

const pokemonRouter = Router();

pokemonRouter.use(authMiddlewares);
/**
 * @swagger
 * tags:
 *  name: Pokemon
 *  description: Route list pokemon
 * # schemes:
 * # - http
 * paths:
 *  /pokemon/list:
 *    get:
 *      tags:
 *      - Pokemon
 *      description: List all pokemons
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */
pokemonRouter.get(
  '/list',
  PokemonController.index
);

pokemonRouter.use(authMiddlewares);
/**
 * @swagger
 * tags:
 *  name: Pokemon
 *  description: Route create Pokemon
 * # schemes:
 * # - http
 * paths:
 *  /pokemon/create:
 *    post:
 *      tags:
 *      - Pokemon
 *      description: Create a new Pokemon
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Create a new Pokemon
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Charmander
 *              type:
 *                type: string
 *                example: fire
 *      responses:
 *        '200':
 *          description: A successful response
 *        '401':
 *          description: message
 *      security:
 *      - Bearer: []
 */
pokemonRouter.post(
  '/create',
  PokemonController.store
);

pokemonRouter.use(authMiddlewares);
/**
 * @swagger
 *  /pokemon/update:
 *    post:
 *      tags:
 *      - Pokemon
 *      description: Route update pokemon
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Update pokemon
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              nickname:
 *                type: string,
 *                example: Squirtle
 *              type:
 *                type: string,
 *                example: Water
 *              pokemonId:
 *                type: integer
 *                example: 1
 *      responses:
 *        '200':
 *          description: Update pokemon success
 *        '401':
 *          description: Error update
 *      security:
 *      - Bearer: []
 */
 pokemonRouter.post(
    '/update',
    PokemonController.update
  );

pokemonRouter.use(authMiddlewares);
/**
 * @swagger
 *  tags:
 *  name: Pokemon
 *  description: Route delete pokemon
 * # schemes:
 * # - http
 * paths:
 *  /pokemon/delete/{pokemonId}:
 *    delete:
 *      tags:
 *      - Pokemon
 *      description: Delete pokemon
 *      parameters:
 *        - name: pokemonId
 *          in: path
 *          required: true
 *          description: id do pokemon
 *          type: integer
 *          example: 1
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */
pokemonRouter.delete(
  '/delete/:pokemonId',
  PokemonController.delete
);

pokemonRouter.use(authMiddlewares);
/**
 * @swagger
 * tags:
 *  name: Pokemon
 *  description: Route view details pokemon
 * # schemes:
 * # - http
 * paths:
 *  /pokemon/viewer/{pokemonId}:
 *    get:
 *      tags:
 *      - Pokemon
 *      description: View pokemon details
 *      parameters:
 *        - name: pokemonId
 *          in: path
 *          required: true
 *          description: id do pokemon
 *          type: integer
 *          example: 1
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */
pokemonRouter.get(
  '/viewer/:pokemonId',
  PokemonController.show
);

export default pokemonRouter;
