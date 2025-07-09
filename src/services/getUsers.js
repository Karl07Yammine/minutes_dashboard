const {users} = require('./appwriteClient');

const getUsers = async () => {
      return await users.list();
}

module.exports = getUsers;