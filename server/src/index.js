require('dotenv').config();

const prerender = require('prerender');
// const memCache = require('prerender-memory-cache');
const redisCache = require('./plugins/redisCache');

const server = prerender({
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars'],
});
// server.use(memCache);
server.use(redisCache);

server.start();
