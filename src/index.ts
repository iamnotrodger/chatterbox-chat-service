import 'dotenv/config';
import server from './server';

const port = process.env.PORT || 8080;
console.log(`Chatterbox Chat Service listening on port ${port}`);
server.listen(port);
