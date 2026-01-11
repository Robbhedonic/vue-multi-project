const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

// Conexión a SQLite
const db = new sqlite3.Database('datos.db', (err) => {
  if (err) console.error(err.message);
  else console.log('Conectado a SQLite.');
});

// Crear tabla mensajes si no existe
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS mensajes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    texto TEXT NOT NULL
  )`);
});

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Obtener todos los mensajes
app.get('/api/mensajes', (req, res) => {
  db.all('SELECT * FROM mensajes', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Crear un nuevo mensaje
app.post('/api/mensajes', (req, res) => {
  const { texto } = req.body;
  db.run('INSERT INTO mensajes (texto) VALUES (?)', [texto], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, texto });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});









