const {databases} = require('./appwriteClient');
require('dotenv').config()

const getTailors = async () => {
      const users = await databases.listDocuments(
         process.env.DB_ID,
         process.env.COLLECTION_TAILORS,
     );
     return users.documents;
}

module.exports = getTailors;