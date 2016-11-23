const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({
    size: req.file.size
  })
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port: ${process.env.PORT || 3000}`);
});
