const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Fedir Klymenko - Railway Function HW6 Successful</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});