const userSeeder = require('./userSeeder');
const messageSeeder = require('./messageSeeder');

const runSeeder = async () => {
  try {
    console.log('Start seeding database...');
    // const users = await userSeeder.run();
    const messages = await messageSeeder.run({
      id: '5f22be524444925c81db132f'
    });
    console.log('Finished seeding database');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  run: runSeeder
}
