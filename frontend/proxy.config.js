module.exports = {
    '/api': {
        target: 'http://localhost:9000',
        secure: false,
        crossOrigin: true,
        router: () => {
            delete require.cache[require.resolve('./apiServer.js')];
            return require('./apiServer');
        },
    },
};
