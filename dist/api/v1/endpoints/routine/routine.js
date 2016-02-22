'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _errors = require('../../../../utils/errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routineApi() {
  var router = _express2.default.Router();

  router.post('/', createRoutine, returnRoutine);

  router.get('/:id', findRoutineById, returnRoutine);

  router.put('/:id', findRoutineById, updateRoutine, returnRoutine);

  router.delete('/:id', findRoutineById, deleteRoutine);

  function createRoutine(req, res, next) {
      try {
          req.routine = routine;
          next();
        } catch (err) {
          next(err);
        }
    }

  function findRoutineById(req, res, next) {
      try {
          if (!req.params.id) {
              return next(new _errors.BadRequestError('No Routine Id specified.'));
            }
          req.routine = { name: 'findRoutineById' };
          if (!req.routine) {
              return next(new _errors.NotFoundError('Routine not found'));
            }
          next();
        } catch (err) {
          next(err);
        }
    }

  function updateRoutine(req, res, next) {
      try {
          req.routine = { name: 'updateRoutine' };
          next();
        } catch (err) {
          next(err);
        }
    }

  function deleteRoutine(req, res, next) {
      try {
          req.routine = { name: 'deleteRoutine' };
          res.sendStatus(204);
        } catch (err) {
          next(err);
        }
    }

  function returnRoutine(req, res) {
      res.json(req.routine);
    }

  return router;
}

exports.default = routineApi;
