import express from "express";
import { UserController } from "../controller/usercontroller";

let userController: UserController;

export class UserRoute {
  constructor() {
    userController = new UserController();
  }

  UserRouter(app: express.Application) {
    app.post("/user", userController.userCreate);
    app.get("/user", userController.getUser);
  }
}