const log = console.log;
const koa = require('koa');
const serve = require('koa-static');

const app = new koa();

app.use(serve('public'));
app.use(serve('dist'));

app.listen(3000, function() {
    log("Server has started at localhost:" + 3000);
});