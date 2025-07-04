const sdk = require("node-appwrite");
require('dotenv').config();


const client = new sdk.Client();

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT)
  .setDevKey(process.env.APPWRITE_DEV_KEY);

module.exports = {
  client,
  account: new sdk.Account(client),
  users: new sdk.Users(client),
  databases: new sdk.Databases(client),
  teams: new sdk.Teams(client),
  functions: new sdk.Functions(client),
  health: new sdk.Health(client),
};
