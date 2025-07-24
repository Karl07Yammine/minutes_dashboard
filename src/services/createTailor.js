const { account, databases, users, ID, teams } = require('./appwriteClient');
require('dotenv').config();

const createTailor = async (name, password, number) => {
   const id = ID.unique();

   try {
      await account.create(id, `${name}@mail.com`, password, name);
      await users.updatePrefs(id, { numero: number , role: 'tailor'});
      await users.updateLabels(id, ['tailor'])
      await databases.createDocument(
         process.env.DB_ID, // databaseId
         process.env.COLLECTION_TAILORS, // collectionId
         id, // documentId
         {
            name,
            number,
            userId: id
         }
      );

   } catch (err) {
      console.error('❌ Error somewhere in the flow:', err);
   }
};

module.exports = createTailor;
