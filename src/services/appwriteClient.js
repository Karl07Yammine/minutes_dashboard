const { Client, Account, Users, Databases, Teams, Functions, Health, ID, Query } = require("node-appwrite");
require('dotenv').config();


const client = new Client();

client
   .setEndpoint(process.env.APPWRITE_ENDPOINT)
   .setProject(process.env.APPWRITE_PROJECT)
   .setKey(process.env.APPWRITE_API_KEY);

module.exports = {
   client,
   account: new Account(client),
   users: new Users(client),
   databases: new Databases(client),
   teams: new Teams(client),
   functions: new Functions(client),
   health: new Health(client),
   ID,
   Query
};
