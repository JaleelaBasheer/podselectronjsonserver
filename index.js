// Steps to generate json server

//1. import json-server
const jsonServer = require('json-server')

// 2. Create server app
const server = jsonServer.create()

// 3. Generate a Middleware to use in json server
const middleware = jsonServer.defaults()

// 4. Set uo route/path for json file
const router = jsonServer.router("db.json")

// 5. Set up port number to run server
const port = 3000 || process.env.PORT

// 6. use middleware and router to the server
server.use(middleware)
server.use(router)

// 7. To listen/run server in specified port
server.listen(port,()=>{
    console.log(`Contact server app started at port ${port}`);
})