// 引入koa
import Koa from "koa";
import bodyparser from "koa-bodyparser";
// 引入路由
import useRoutes from "./routers/index";
// 引入错误处理函数
import errorHandle from "./utils/errorHandle";
// 引入跨域
import cors from "@koa/cors";

// 创建koa实例
const app = new Koa();

// 监听跨域
app.use(cors());

app.use(bodyparser());

// 使用路由
useRoutes(app);
// 定义没有匹配到的404路由
app.use((ctx, next) => {
  ctx.status = 404;
  ctx.body = {
    message: "请求路径无效",
  };
  next();
});

// 错误处理
app.on("error", errorHandle);

// 监听端口
app.listen(8081, () => {
  console.log("current server runs at: http://localhost:" + 8081);
});
