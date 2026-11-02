const Database = require('better-sqlite3');
const db = new Database('dev.db');
const result = db.prepare('SELECT * FROM Shipment').all();
console.log(result.length);
db.close();
