const path = require('path');
const koa = require('koa');
const app = new koa();
const koaBody = require('koa-body');
const router = require('@koa/router')();
const views = require('koa-views');
const static = require('koa-static');

app.use(views(__dirname + '/views', { map: { html: 'ejs' } }));

app.use(koaBody());

app.use(static(path.join(__dirname, '/static')));

router.get('/', ctx =>
  ctx.render('index', { title: 'hello world' }));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running at port 8080');
});