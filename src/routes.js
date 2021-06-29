import 'dotenv/config';

import { Router } from 'express';
import swagerDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import sessionRouter from './app/models/Users/routes/session.routes';
import usersRouter from './app/models/Users/routes/users.routes';
import pokemonRouter from './app/models/Pokemon/routes/pokemon.routes';


const routes = new Router();

const options = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'API DESAFIO POKEMON ',
      description: '',
      contact: {
        email: 'joaojunior346@gmail.com',
        name: 'Joao Junior',
      },
      servers: ['http://localhost:3333'],
    },
    securityDefinitions: {
      Bearer: {
        description: 'Token',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
  // ['.routes/*.js']
  apis: ['**/*routes.js'],
};

const swaggerDocs = swagerDoc(options);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes.use('/login', sessionRouter);
routes.use('/user', usersRouter);
routes.use('/pokemon', pokemonRouter);

export default routes;
