const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express()

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = 8000;

app.get("/", async (_, res) => {
  await res.status(200).json({ message: "Hello world!" })
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;