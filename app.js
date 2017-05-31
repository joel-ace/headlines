const express = require('express');

const path = require('path');

const app = express();

const router = express.Router();

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

router.get('/', (req, res) => res.render(`${publicPath}/index.html`));

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
