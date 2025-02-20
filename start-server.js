const httpServer = require('http-server');
const path = require('path');
const { exec } = require('child_process'); 
const root = path.resolve(__dirname);
const server = httpServer.createServer({
  root: root,
  cors: true,
  spa: true,
});
const port = 3000;
server.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log(`WELCOME TO THE DEXTOP SERVER`);
  console.log(`----------`);
  console.log(`Paste this URL in your browser`);
  console.log(`----------`);
  console.log(`Server running at - http://localhost:${port}`);
  console.log(`----------`);
  console.log(`Serving files from: ${root}`);

  const url = `http://localhost:${port}`;
  const platform = process.platform;
  if (platform === 'win32') {
    exec(`start ${url}`); 
  } else if (platform === 'darwin') {
    exec(`open ${url}`); 
  } else if (platform === 'linux') {
    exec(`xdg-open ${url}`); 
  } else {
    console.log(`Please manually open your browser and go to ${url}`);
  }
});

