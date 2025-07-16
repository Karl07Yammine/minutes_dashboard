const { databases } = require('./appwriteClient');
require('dotenv').config();

const deleteService = async (service_id) => {

   try {
      await databases.deleteDocument(
         process.env.DB_ID, // databaseId
         process.env.COLLECTION_SERVICES, // collectionId
         service_id, // documentId
      );

   } catch (err) {
      console.error('❌ Error somewhere in the flow:', err);
   }
};

    module.exports = deleteService;
