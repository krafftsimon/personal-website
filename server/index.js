const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// Return other routes to React index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = '3000';

app.set('port', port);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
