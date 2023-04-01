import User from '../models/user.model.js';

class UserController {
	create(req, res, next) {
		console.log('in here', req.body);
		if (!req.body) {
			res.status(400).json({
				success: false,
				message: 'Content can not be empty!',
			});
		}
		const { username, email, password } = req.body;
		const user = new User({
			username,
			email,
			password,
		});
		User.create(user, (error, result) => {
			if (error) {
				next(error);
			} else {
				res.status(200).json({
					success: true,
					message: 'created successfully',
					data: result,
				});
			}
		});
	}

	getById(req, res, next) {
		if (!req.params) {
			res.status(404).json({ success: true, message: 'params is empty' });
		}
		const { userId } = req.params;

		User.findById(userId, (error, result) => {
			if (error) {
				next(error);
			} else {
				res
					.status(200)
					.json({ success: true, message: 'user is found', user: result });
			}
		});
	}

	update(req, res, next) {
		if (!req.params || !req.body) {
			res
				.status(404)
				.json({ success: true, message: 'params or body is empty' });
		}

		const { userId } = req.params;
		const { username, email, password } = req.body;

		User.updateById(userId, { username, email, password }, (error, result) => {
			if (error) next(error);
			else
				res.status(200).json({
					success: true,
					message: 'updated successfully',
					user: result,
				});
		});
	}
}

export default new UserController();
