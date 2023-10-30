const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/hair', createProxyMiddleware({
            target: 'http://localhost:8080', // Update the backend server URL
            changeOrigin: true,
        })
    );
};
