import { UserModel } from "../model/User";

class UserService {
  async findAllUser(): Promise<number> {
    try {
      const data = await UserModel.count();
      return data;
    } catch (err) {
      console.log(err);
      return 0;
    }
  }
}
export default new UserService();
