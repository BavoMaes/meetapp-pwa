const userSeeder = require('./userSeeder');
const matchSeeder = require('./matchSeeder');
const messageSeeder = require('./messageSeeder');

const runSeeder = async () => {
  try {
    console.log('Start seeding database...');
    const users = await userSeeder.run();
    console.log(`Created ${users.length} new users.`);
    const matches = await matchSeeder.run(users);
    console.log(`Created ${matches.length} matches.`)
    // const messages = await messageSeeder.run(users);
    // console.log(`Created ${messages.length} new messages.`)
    console.log('Finished seeding database.');
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  run: runSeeder
}
