// eslint-disable-next-line
const dotenv = require('dotenv');
dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT || '3000',
};
