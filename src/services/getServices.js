const {databases} = require('./appwriteClient');
require('dotenv').config()

const getServices = async () => {
      const services = await databases.listDocuments(
         process.env.DB_ID,
         process.env.COLLECTION_SERVICES,
     );
     return services.documents;
}

module.exports = getServices;