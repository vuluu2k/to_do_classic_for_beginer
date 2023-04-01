import UserRouter from './user.route.js';

const route = (app) => {
	app.use('/v1/user', UserRouter);
};

export default route;
