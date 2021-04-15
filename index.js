const express = require('express');
const sequelize = require('./db/sequelize');

const PORT = 3000;
const app = express();

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
		process.exit(1);
	}
}

async function init() {
  await assertDatabaseConnectionOk();

  app.use(express.json());

	console.log(`Starting Sequelize + Express example on port ${PORT}...`);

	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/users'.`);
	});

  app.get('/', (req, res) => res.json({ message: 'Hello World' }));
}

init();


  // User.sync({ force: true }) // Now the `users` table in the database corresponds to the model definition


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.post('/user', async (req, res) => {
//   try {
//     const newUser = new User(req.body)

//     await newUser.save()

//     res.json({ user: newUser }) // Returns the new user that is created in the database

//   } catch (error) {

//     console.error(error)

//   }

// });

// app.get('/user/:userId', async (req, res) => {

//   const userId = req.params.userId

//   try {

//     const user = await User.findAll({

//       where: {

//         id: userId

//       }

//     }

//     )

//     res.json({ user })

//   } catch (error) {

//     console.error(error)

//   }

// });

