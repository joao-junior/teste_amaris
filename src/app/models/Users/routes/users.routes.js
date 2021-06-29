import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import authMiddlewares from '../../../middlewares/auth';

const userRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Route list users
 * # schemes:
 * # - http
 * paths:
 *  /user/list:
 *    get:
 *      tags:
 *      - Users
 *      description: List all users
 *      responses:
 *        '200':
 *          description: A successful response
 */
userRouter.get('/list', UsersController.index);

/**
 * @swagger
 *  /user/create:
 *    post:
 *      tags:
 *      - Users
 *      description: Route create a new user
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Create a new user
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              nickname:
 *                type: string,
 *                example: SrNobody
 *              mail:
 *                type: string,
 *                example: 'nobody@gmail.com'
 *              password:
 *                type: string,
 *                example: '12345'
 *      responses:
 *        '200':
 *          description: A success response
 *        '401':
 *          description: Mail already exists
 */
userRouter.post('/create', UsersController.store);

userRouter.use(authMiddlewares);
/**
 * @swagger
 *  /user/update:
 *    post:
 *      tags:
 *      - Users
 *      description: Route update user
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Update user
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              nickname:
 *                type: string,
 *                example: SrNobody
 *              mail:
 *                type: string,
 *                example: 'nobody@gmail.com'
 *              password:
 *                type: string,
 *                example: '12345'
 *      responses:
 *        '200':
 *          description: Update user success message
 *        '401':
 *          description: Error update
 *      security:
 *      - Bearer: []
 */
 userRouter.post(
    '/update',
    UsersController.update
  );

export default userRouter;
