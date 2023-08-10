const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from my Node.js app hosted on Netlify!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
