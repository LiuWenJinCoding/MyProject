const Koa = require('koa');
const convert = require('koa-convert');
const loggerGenerator = require('./middleware/logger-generator');

const app = new Koa();
app.use(convert(loggerGenerator()))
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
console.log('the server is starting at port 3000');