"use strict";
import express from 'express';

/**
router.get('/players/:id', function(req, res, next) {
  var player = players.getPlayerById(req.params.id)
  res.json(player);
});
**/

function startServer(store)
{
	const app = express();
	const port = 3010;
	const router = express.Router();

  router.use(function(req, res, next) {
	  console.log('%s %s', req.method, req.path);

		// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8010');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	  next();  
	});

	router.get('/store', function(req, res, next) {
	  res.json({ store: store.getState().toJS() });
	});

	app.use('/api', router);
	app.listen(port);
	console.log('Server listening on port ' + port);
}


export { startServer }