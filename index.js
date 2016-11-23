const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.get('/', (res, req) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port: ${process.env.PORT || 3000}`);
});
