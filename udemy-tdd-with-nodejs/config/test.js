module.exports = {
  database: {
    database: 'hoaxify',
    username: 'db-user',
    password: 'db-pasword',
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  },
  mail: {
    host: 'localhost',
    port: Math.floor(Math.random() * 2000) + 10000,
    tls: {
      rejectUnauthorized: false,
    },
  },
  uploadDir: 'upload-test',
  profileDir: 'profile',
};
