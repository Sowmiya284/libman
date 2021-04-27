import { Request, Response } from 'express';
import { UserService } from '../service/userservice';
import { UserModel } from '../model/usermodel';
import { Logger } from "winston";
import logger from "../config/logger";


let userService: UserService;

export class UserController {
    constructor() {
        userService = new UserService();
    }


    public async userCreate(req: Request, res: Response) {
        logger.info("create the user");
        try {
            const user = await userService.userCreate(req.body);
            res.status(200).json(user);
        } catch (err) {
            if (err && err._message && err._message === 'validation failed') {
                res.status(400).send(err);
            } else {
                res.status(500).send(err);
                logger.error("error");
            }
        }
    }
    public async getUser(req: Request, res: Response) {
        logger.info("get information about the user");
             try {
                const users = await userService.getUser();
                res.status(200).json(users);
                logger.info('success');
             } catch (err) {
                   if (err && err._message && err._message === 'validation failed') {
                       res.status(400).send(err);
                    } else {
                         res.status(500).send(err);
                           logger.error("error");
               }
           }
        }
    }