module.exports = {
  database: {
    database: 'hoaxify',
    username: 'db-user',
    password: 'db-pasword',
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
  },
  mail: {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ansley20@ethereal.email',
      pass: 'B5t8rr8mPVN7x3MGBE',
    },
  },
  uploadDir: 'upload',
  profileDir: 'profile',
};
