// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
function getIdParam(req) {
	const id = req.params.id;
	if (/^\d+$/.test(id)) {
		return Number.parseInt(id, 10);
	}
	throw new TypeError(`Invalid ':id' param: "${id}"`);
}

function generateGenericRoutes(model) {
	async function getAll(req, res) {
		const datas = await model.findAll();
		res.status(200).json(datas);
	};
	
	async function getById(req, res) {
		const id = getIdParam(req);
		const data = await model.findByPk(id);
		if (data) {
			res.status(200).json(data);
		} else {
			res.status(404).send('404 - Not found');
		}
	};
	
	async function create(req, res) {
		if (req.body.id) {
			res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
		} else {
			await model.create(req.body);
			res.status(201).end();
		}
	};
	
	async function update(req, res) {
		const id = getIdParam(req);
	
		// We only accept an UPDATE request if the `:id` param matches the body `id`
		if (req.body.id === id) {
			await model.update(req.body, {
				where: {
					id: id
				}
			});
			res.status(200).end();
		} else {
			res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
		}
	};
	
	async function remove(req, res) {
		const id = getIdParam(req);
		await model.destroy({
			where: {
				id: id
			}
		});
		res.status(200).end();
	};

	return {
		getAll,
		getById,
		create,
		update,
		remove,
	};
}

module.exports = { getIdParam };