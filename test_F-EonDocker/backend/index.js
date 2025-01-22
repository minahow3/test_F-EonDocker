const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

// CORS設定をより明示的に指定
const corsOptions = {
  origin: 'https://miniature-giggle-55rw9q46x9j279rp-3000.app.github.dev', // フロントエンドのURL
  methods: ['GET', 'POST'], // 許可するHTTPメソッド
  allowedHeaders: ['Content-Type'], // 許可するヘッダー
};

app.use(cors(corsOptions));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
