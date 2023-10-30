const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/hair', {
            target: 'http://localhost:8080', // Update the backend server URL
            changeOrigin: true,
        })
    );
};
