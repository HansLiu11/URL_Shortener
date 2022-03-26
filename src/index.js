const express = require("express");
const config = require("./config");
const loader = require("./loaders");

async function startServer() {
  const app = express();
  
  await loader(app);
  app
  .listen(config.port, () => {
    console.log(`
          ################################################
          🛡️  HTTP server listening on port: ${config.port} 🛡️
          ################################################
      `);
  })
  .on("error", (err) => {
    console.log(err);
    process.exit(1);
  });
}

startServer();