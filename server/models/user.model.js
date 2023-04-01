import conn from './db.js';

const User = function (user) {
	this.username = user.username;
	this.email = user.email;
	this.password = user.password;
};

User.create = (newUser, callback) => {
	conn.query('INSERT INTO users SET ?', newUser, (error, result) => {
		if (error) {
			callback(error, null);
			return error;
		}
		console.log('created tutorial: ', result, '\n', {
			id: result.insertId,
			...newUser,
		});

		callback(null, { id: result.insertId, ...newUser });
		return { id: result.insertId, ...newUser };
	});
};

User.findById = (id, callback) => {
	conn.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
		if (error) {
			callback(error, null);
			return error;
		}

		if (result.length) {
			callback(null, result[0]);
			return result[0];
		}

		callback(null, {});
	});
};

User.updateById = (id, updateUser, callback) => {
	conn.query(
		'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
		[updateUser.username, updateUser.email, updateUser.password, id],
		(error, result) => {
			if (error) {
				callback(error, null);
				return null;
			}

			if (result.affectedRows == 0) {
				callback({ kind: 'not_found' }, null);
				return { kind: 'not_found' };
			}

			callback(null, { id, ...updateUser });
		}
	);
};

User.removeById = (id, callback) => {
	conn.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
		if (error) {
			callback(error, null);
			return null;
		}

		if (result.affectedRows == 0) {
			callback({ kind: 'not_found' }, null);
			return { kind: 'not_found' };
		}

		callback(null, result);
	});
};

export default User;
