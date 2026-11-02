const Database = require('better-sqlite3');
const db = new Database('dev.db');
db.prepare("DROP TABLE IF EXISTS ShipmentUpdate").run();
db.prepare("DROP TABLE IF EXISTS Shipment").run();
db.prepare("CREATE TABLE Shipment (id TEXT PRIMARY KEY, trackingCode TEXT UNIQUE NOT NULL, senderName TEXT NOT NULL, senderPhone TEXT NOT NULL, receiverName TEXT NOT NULL, receiverPhone TEXT NOT NULL, pickupAddress TEXT NOT NULL, deliveryAddress TEXT NOT NULL, serviceType TEXT DEFAULT 'STANDARD', weight REAL, price REAL, status TEXT DEFAULT 'PENDING', notes TEXT, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP)").run();
db.prepare("CREATE TABLE ShipmentUpdate (id TEXT PRIMARY KEY, shipmentId TEXT NOT NULL, status TEXT NOT NULL, location TEXT, remark TEXT, createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (shipmentId) REFERENCES Shipment(id) ON DELETE CASCADE)").run();
console.log('ok');
db.close();
