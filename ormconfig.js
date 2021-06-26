module.exports = {
   "type": "postgres",
   "host": process.env.NODE_ENV === 'local' ? "localhost" : "db",
   "port": 5432,
   "username": "postgres",
   "password": "root",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}