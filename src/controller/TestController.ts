import { Context, Next } from "koa";
import UserService from "../service/UserService";
class TestController {
  async getTest(ctx: Context, next: Next) {
    try {
      const data = await UserService.findAllUser();
      console.log(data);
      ctx.body = `current sql has ${data} users`;
    } catch (err) {
      ctx.body = "server error";
    }
  }
}

export default new TestController();
