import { BookDao } from "../dao/bookdao";
import { BookModel } from "../model/bookmodel";

let bookDao: BookDao;
export class BookService {
    constructor() {
        bookDao = new BookDao();
    }

    public async bookCreate(body: BookModel) {
        return await bookDao.bookCreate(body);
    }
    public async getBook() {

        return await bookDao.getBook();
    }
    public async updateOneBook(id:string,book:BookModel){
        const value=await bookDao.updateOneBook(id,book);
          console.log('value',value);
            return value;
        }


}
