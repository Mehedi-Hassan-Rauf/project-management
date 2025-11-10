import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const fixDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    console.log('\n📋 Available collections:', collections.map(c => c.name));

    // Drop the problematic username index from users collection
    try {
      await db.collection('users').dropIndex('username_1');
      console.log('✅ Dropped old username_1 index');
    } catch (error) {
      if (error.code === 27 || error.codeName === 'IndexNotFound') {
        console.log('ℹ️  username_1 index not found (already removed or never existed)');
      } else {
        throw error;
      }
    }

    // List current indexes
    const indexes = await db.collection('users').indexes();
    console.log('\n📌 Current indexes on users collection:');
    indexes.forEach(index => {
      console.log(`  - ${index.name}:`, Object.keys(index.key));
    });

    console.log('\n✅ Database fixed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

fixDatabase();
