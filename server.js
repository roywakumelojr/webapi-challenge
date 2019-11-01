const express = require('express');

const server = express();
const helmet = require('helmet');
const projectRouter = require('./projectRouter');
const actionRouter = require('./actionRouter');

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  
    next();
};

server.use(helmet());
server.use(logger);
server.use(express.json());
server.use(projectRouter);
server.use(actionRouter);

module.exports = server;