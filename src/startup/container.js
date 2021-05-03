const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const { AuthService, UserService } = require("../services");

// controllers
const { AuthController } = require("../controllers");

// routes
const { AuthRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User, Comment, Idea } = require("../models");

// repositories
const { UserRepository } = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    User: asValue(User),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;