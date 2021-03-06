const express = require('express');
const bcrypt = require('bcrypt');
const userService = require('../user/UserService');
const AuthenticationException = require('./AuthenticationException');
const ForbiddenException = require('../errors/ForbiddenException');
const { check, validationResult } = require('express-validator');
const authRouter = express.Router();
const TokenService = require('./TokenService');

authRouter.post(
  '/api/1.0/auth',
  check('email').isEmail(),
  check('password').notEmpty(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new AuthenticationException());
    }

    const { email, password } = req.body;
    const user = await userService.findByEmail(email);
    if (!user) {
      return next(new AuthenticationException());
    }

    if (user.inactive) {
      return next(new ForbiddenException());
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return next(new AuthenticationException());
    }

    const token = await TokenService.createToken(user);
    res.send({
      id: user.id,
      username: user.username,
      token,
      image: user.image,
    });
  }
);

authRouter.post('/api/1.0/logout', async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.substring(7);
    await TokenService.deleteToken(token);
  }
  return res.send();
});

module.exports = authRouter;
