import express from "express";
import { BookController } from "../controller/bookcontroller";


let bookController: BookController;

export class BookRoute {
  constructor() {
    bookController = new BookController();
  }

  BookRouter(app: express.Application) {
    app.post("/book", bookController.bookCreate);
    app.get("/book", bookController.getBook);
    app.put("/book/:id", bookController.updateOneBook);
 
  }
 
}