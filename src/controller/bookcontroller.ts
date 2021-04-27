import { Request, Response } from 'express';
import { BookService } from '../service/bookservice';
import { BookModel } from '../model/bookmodel';
import { Logger } from "winston";
import logger from "../config/logger";

let bookService: BookService;

export class BookController {
    constructor() {
        bookService = new BookService();
    }

    public async bookCreate(req: Request, res: Response) {
        logger.info("create the book");
        
        try {
            const book= await bookService.bookCreate(req.body);
            res.status(200).json(book);
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
    public async getBook(req: Request, res: Response) {
        logger.info("get information about the book");
        
       try {
           const books = await bookService.getBook();
           res.status(200).json(books);
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
   public async updateOneBook(req: Request, res: Response) {
    logger.info("get information about the bookId");
        
    try {
        const bookData = req.body;
        const BookId = req.params.id;

        console.log(BookId, bookData)

        const book = await bookService.updateOneBook(BookId,bookData);
        res.status(200).json(book);
        logger.info('success')
    
    } catch (err) {
        if (err && err._message && err._message === 'validation failed') {
            res.status(400).send(err);
        } else {
            res.status(500).send(err);
            
        }
    }
}



}