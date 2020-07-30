const userSeeder = require('./userSeeder');

const runSeeder = async () => {
  try {
    console.log('Start seeding database...');
    const users = await userSeeder.run();
    console.log('Finished seeding database');
  } catch (error) {
    console.error(error);
  }
};

runSeeder();

module.exports = {
  run: runSeeder
}
