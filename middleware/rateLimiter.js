const rateLimit = require('express-rate-limit');

exports.rate = rateLimit({
  windowMs: 2 * 60 * 1000, // 20m in milliseconds
  max: 20,
  message: 'You have exceeded the 20 requests in 2 minutes limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});