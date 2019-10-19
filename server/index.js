const Hapi = require('@hapi/hapi');
const goldpage = require('./goldpage');
const wildcard = require('./wildcard');

startServer();

async function startServer() {
  const port = process.env.PORT || 3000;
  const server = Hapi.Server({port, debug: {request: ['internal']}});

  await server.register(wildcard);
  await server.register(goldpage);

  await server.start();

  console.log('Server running at http://localhost:'+port);
}
