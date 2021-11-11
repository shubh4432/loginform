const app = require('./index')
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
dotenv.config({ path: './config.env' });
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});