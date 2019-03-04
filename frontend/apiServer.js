const apiServers = new Map()
    .set('local', 'http://localhost:8080')
    .set('mock', 'http://localhost:9000');

module.exports = apiServers.get('local');
