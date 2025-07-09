const { health } = require('./appwriteClient');

async function checkAppwriteHealth() {
  try {
    const res = await health.get();
    console.log('✅ Appwrite is healthy:', res);
  } catch (err) {
    console.error('❌ Appwrite is NOT healthy:', err.message || err);
  }
}

module.exports = checkAppwriteHealth;