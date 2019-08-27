const express = require('express');
const cors =require('cors');
const helmet = require('helmet')

const listRouter =require('../lists/lists-router');
const todoRouter = require('../todos/todos-router');

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/api', listRouter)
//server.use('/api', todoRouter)
module.exports = server;