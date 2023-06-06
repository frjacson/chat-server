import { Context, Next } from "koa";
import { errorTypes } from "../constants/errorStatus";
import ResBody from "./ResBody";

type ErrorType = {
  message?: string;
};
const errorHandle = (error: ErrorType, ctx: Context, next: Next) => {
  let status: number;
  let message: string;
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 401;
      message = "用户名或者密码不为空";
      break;
    case errorTypes.USER_IS_NOT_EXIST:
      status = 401;
      message = "用户名不存在";
      break;
    case errorTypes.NAME_IS_ALREADY_EXIST:
      status = 401;
      message = "该用户名已经存在，请更换";
      break;
    case errorTypes.PASSWORD_IS_INVALID:
      status = 401;
      message = "密码错误，请重试";
      break;
    case errorTypes.TOKEN_IS_INVALID:
      status = 403;
      message = "当前token无效，请重新登录";
      break;
    default:
      status = 404;
      message = "未知错误，请联系管理员";
  }
  ctx.body = new ResBody(status, false, { message: message });
  next();
};

export default errorHandle;
