import { UserDao } from "../dao/userdao";
import { UserModel } from "../model/usermodel";

let userDao: UserDao;
export class UserService {
    constructor() {
        userDao = new UserDao();
    }

    public async userCreate(user: UserModel) {
        return await userDao.userCreate(user);
    }
     public async getUser() {
        return await userDao.getUser();
    }
}