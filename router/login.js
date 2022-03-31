module.exports = app => {
  app.post('/api/login', (req, res) => {
    res.writeHead(200, {
      "Content-type": "text/plain"
    });
    res.end('1024');
  });
}