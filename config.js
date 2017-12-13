var config = {}

config.host = process.env.HOST || "https://azure532.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "BtwwcMvL8Shm7JEIr6QFHefvAKNM6HTRrkUhDA2bCip11hEGKfWXw8WgGKk5ASKE9VG1HvDJq1pMTxv846z4sg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;