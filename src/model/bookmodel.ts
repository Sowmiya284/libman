import mongoose from "mongoose";

const { Schema } = mongoose;

export interface BookModel {
  BookId: String;
  BookName: String;
  author: String;
  yearofpublish: String;
  status: String;
  
}

export const bookSchema = new Schema({
  BookId: { type: String },
  BookName: { type: String, required: true },
  author: { type: String },
  yearofpublish: { type:String },
  status: { type: String },
  
});
