const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mangaRouter = require('./routes/mangaRouter');
const mangaListRouter = require('./routes/mangaListRouter');
const mangaSearch = require('./routes/mangaSearch');
const ApiKey = require('./middleware/apiKeyMiddleware');
require('dotenv').config();

const app = express();

app.use(cors({ origin: 'http://localhost:3001' })); // Tambahkan CORS middleware
app.use(bodyParser.json());
app.use(ApiKey);
app.use('/api/manga', mangaRouter);
app.use('/api/mangaList', mangaListRouter);
app.use('/api/search', mangaSearch);

app.listen(process.env.PORT, () => {
  console.log(`Server Start On Port ${process.env.PORT} 🎉✨`);
});
