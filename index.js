// 1. Import json-server
const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// 2. Create server app
const server = jsonServer.create();

// 3. Generate a Middleware to use in json server
const middleware = jsonServer.defaults();

// 4. Set up route/path for json file
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// 5. Set up port number to run server
const port = process.env.PORT || 4000;

// 6. Use middleware and router to the server
server.use(middleware);
server.use(router);

// 7. To listen/run server in specified port
server.listen(port, () => {
    console.log(`JSON server is running at http://localhost:${port}`);
});
