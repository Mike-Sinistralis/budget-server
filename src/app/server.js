"use strict";

import Server from 'socket.io';

function startServer(store)
{
  const io = new Server().attach(3010);
  console.log("Server listening for Websocket connections on Port 3010");

  store.subscribe(
	  () => io.emit('state', store.getState().toJS())
	);

	io.on('connection', (socket) => {
	  socket.emit('state', store.getState().toJS());
	  socket.on('action', store.dispatch.bind(store));
	});
}



export { startServer }