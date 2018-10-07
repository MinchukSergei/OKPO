const log = console.log;
const koa = require('koa');
const serve = require('koa-static');

const app = new koa();

app.use(serve('public'));
app.use(serve('dist'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    log("Server has started at localhost:" + PORT);
});