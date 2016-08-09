module.exports = {
  DB: {
    test: {
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        database: '',
        user: '',
        password: ''
      }
    },
    development: {
      client: 'mysql',
      connection: {
        host: '',
        database: '',
        user: 'root',
        password: ''
      },
      debug: true
    },
    production: {
      client: 'mysql',
      connection: {
        host: '',
        database: '',
        user: '',
        password: ''
      }
    }
  }
};