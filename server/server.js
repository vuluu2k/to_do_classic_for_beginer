import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.json({ success: true, message: 'Hello everyone!' });
});

app.listen(port, () => {
	console.log(`Web server listening on port http://localhost:${port}`);
});
