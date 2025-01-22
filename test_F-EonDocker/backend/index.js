const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors({
  origin: 'http://frontend:3000', // フロントエンドのURLを指定
}));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
