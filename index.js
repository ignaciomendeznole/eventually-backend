const express = require('express');
const connectDb = require('./config/database');
const cors = require('cors');

const app = express();

connectDb();

app.use(cors());

app.use(express.json({ extended: true }));

const port = process.env.PORT || 5000;

app.use('/api/events/', require('./routes/events'));
app.use('/api/users/', require('./routes/users'));

app.listen(port, '0.0.0.0', () => {
  console.log(`server running on port ${port}`);
});
