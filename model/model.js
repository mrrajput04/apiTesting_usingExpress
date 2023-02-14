const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const databaseName = "user-data";
const client = new MongoClient(url);

async function insert(collectionName, rest) {
  await client.connect();
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);
  return await collection.insertOne(rest);
}

async function getUsers(collectionName, data) {
  await client.connect();
  const db = client.db(databaseName);
  console.log(data);
  const collection = db.collection(collectionName);
  return await collection.find(data).toArray();
}


async function getAllUser(collectionName){
  await client.connect();
  const db = client.db(databaseName);
  return collection = db.collection(collectionName);
}


module.exports = { getUsers, insert, getAllUser };
