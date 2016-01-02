import express from 'express';
import {urlencoded, json } from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { notFoundHandler, errorHandler } from './middleware/middleware'
import firstApiVersion from './api/v1';

function startServer()
{
	const app = express();
	const port = 3010;

	app.use(cors());
	app.use(urlencoded({ extended: true }));
	app.use(json());
	app.use(cookieParser());

	app.use('/v1', firstApiVersion());
	app.use(notFoundHandler);
	app.use(errorHandler);

	app.listen(port);
	console.log('Server listening on port ' + port);
}


export { startServer };
