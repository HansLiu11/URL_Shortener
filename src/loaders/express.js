const express = require("express");
const cors = require("cors");
const routes = require("../api");
const config = require("../config");
// const rateLimit =  require("express-rate-limit");

module.exports = (app) => {
  /**
   * Health Check endpoints
   */

  app.get("/status", (req, res) => {
    // res.json({'message': 'ok'});
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");

  app.use(cors());
  app.use(express.json());
  // Load API routes
  app.use("",routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    res.status(404);
    next(err);
  });

  // Error handler it will log the error and warn
  // The level of log depends on status code
  app.use((err, req, res, next) => {
    if (res.statusCode < 500 && res.statusCode >= 400) {
      console.log(err.stack);
    } else {
      res.status(500);
    }
    res.send( "<h1>" + res.statusCode +" "+ err.message + " on the server </h1>");
  });
};
