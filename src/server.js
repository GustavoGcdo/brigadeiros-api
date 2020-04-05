require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const { PORT, DB_URI } = process.env;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log('> [server] mongo database conected', DB_URI);
  })
  .catch((err) => {
    throw err;
  });

app.listen(PORT, () => {
  console.log(`> [server] listen on port ${PORT}`);
});
