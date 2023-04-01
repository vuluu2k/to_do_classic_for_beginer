import express from 'express';
import cors from 'cors';
import route from './routes/index.js';

const app = express();
const port = 3000;
const corsOptions = {
	origin: '*',
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.get('/', (req, res) => {
	res.json({ success: true, message: 'Hello everyone!' });
});

route(app);

app.listen(port, () => {
	console.log(`Web server listening on port http://localhost:${port}`);
});
