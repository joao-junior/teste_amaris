import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const sessionRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Session
 *  description: Route create token
 * # schemes:
 * # - http
 * paths:
 *  /login:
 *    post:
 *      tags:
 *      - Session
 *      description: Login user
 *      parameters:
 *        - name: body
 *          in: body
 *          description: email and password
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              mail:
 *                type: string
 *                example: nobody@gmail.com
 *              password:
 *                type: string
 *                example: '12346'
 *      responses:
 *        '200':
 *          description: A successful response
 *        '401':
 *          description: message
 */
sessionRouter.post('/', SessionController.store);

export default sessionRouter;
