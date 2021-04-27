import mongoose from "mongoose";
import { bookSchema, BookModel } from "../model/bookmodel";


const BookModel = mongoose.model("Book", bookSchema);
export class BookDao {
  public async bookCreate(body: BookModel) {
    const book = new BookModel(body);
    return await book.save();
  }
  
  public async getBook() {
    const bookData = await BookModel.find();
    return bookData;
  }
  public async updateOneBook(id:string,body:BookModel){
      const book=new BookModel(body);
      return await book.findByIdAndupdate(id,body);


  }
  
  }


