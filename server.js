const express = require('express');

const server = express();
const helmet = require('helmet');
const projectRouter = require('./projectRouter');

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  
    next();
};

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(projectRouter);

module.exports = server;