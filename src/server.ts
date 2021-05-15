import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const server = createServer();
const io = new Server(server, {
    path: '/api/chat',
    cors: {
        origin: '*',
    },
});

io.on('connection', (socket: Socket) => {
    console.log('new connection');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message);
    });
});

export default server;
