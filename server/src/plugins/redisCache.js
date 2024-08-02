const { createClient } = require('redis');

console.log(process.env.REDIS_URL);

const client = createClient({
  url: process.env.REDIS_URL,
})
  .on('error', (err) => console.error('Redis error:', err))
  .on('ready', () => console.log('Redis ready'))
  .on('end', () => console.log('Redis connection closed'));

module.exports = {
  requestReceived: async (req, res, next) => {
    const key = req.prerender.url;

    let result;
    try {
      await client.connect();
      result = await client.get(key);
      await client.disconnect();
    } catch (err) {
      console.error('Redis error:', err);
    }

    if (result) {
      console.log('Cache hit for', key);

      req.prerender.cacheHit = true;
      return res.send(200, result);
    }

    next();
  },
  beforeSend: async (req, _res, next) => {
    if (!req.prerender.cacheHit && req.prerender.statusCode === 200) {
      const key = req.prerender.url;
      const value = req.prerender.content;

      try {
        await client.connect();
        await client.set(key, value, { EX: process.env.REDIS_EXPIRATION_SECONDS });
        await client.disconnect();
      } catch (err) {
        console.error('Redis error:', err);
      }
    }

    next();
  },
};
