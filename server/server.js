const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

console.log('Current Directory:', __dirname);
console.log('Serving static files from:', path.join(__dirname, '../client/dist'));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
