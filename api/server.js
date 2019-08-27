const express = require('express');
const cors =require('cors');
const helmet = require('helmet')

const listRouter =require('../lists/lists-router');
const todoRouter = require('../todos/todos-router');
const authRouter = require('../auth/auth-router');
const auth = require('../auth/auth-middleware');
const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('/auth', authRouter)
server.use('/api', auth,listRouter)
server.use('/api', auth, todoRouter)
module.exports = server;