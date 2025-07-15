const { users, databases } = require('./appwriteClient');
require('dotenv').config();

const deleteTailor = async (id) => {
   await users.delete(id);
   await databases.deleteDocument(process.env.DB_ID, process.env.COLLECTION_TAILORS, id);
};

module.exports = deleteTailor;
