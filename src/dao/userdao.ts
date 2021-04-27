import mongoose from 'mongoose';
import { userSchema, UserModel } from '../model/usermodel';

const UserModel = mongoose.model('User', userSchema);
export class UserDao {

  public async userCreate(user: UserModel) {
    const userObject = new UserModel(user);
      return await userObject.save();
  }
    public async getUser() {
    const userData = await UserModel.find();
      return userData;
}
}