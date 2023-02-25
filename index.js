const mongoose = require('mongoose');
const config = require("./config/config");
const app = require("./app");

mongoose.set('strictQuery', true)
const DB_URI = config.mongoose.url;
mongoose
  .connect(`${DB_URI}`, {
    useNewUrlParser: true,

  })
  .then(() => console.log("Connected to DB at ", DB_URI))
  .catch(() => console.log("Failed to connect at DB at", DB_URI));

app.listen(`${config.port}`, () =>
  console.log(`App is running on port: ${config.port}`)
);

