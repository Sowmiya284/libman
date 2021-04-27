import mongoose from "mongoose";
import { BookModel } from "./bookmodel";

const { Schema } = mongoose;

export interface UserModel {
  userId: String;
  firstName: String;
  lastName: String;
  address: Object;
  dob: Number;
  checkin:String;
  checkout:String
  bookIds: [String];
}

export const userSchema = new Schema({
  userId: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String },
  address: { type: Object },
  dob: { type: Number },
  checkin:{type:String},
  checkout:{type:String},
  bookIds: [{ type: String }],
});
