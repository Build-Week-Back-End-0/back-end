require("dotenv").config();

const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

server.use((req, res, next) => {
  console.log("%0", req);
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
