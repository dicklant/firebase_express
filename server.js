const express = require("express");

const app = express();
app.use(express.json());

// Firebase App Hosting injecte automatiquement la variable PORT
const PORT = process.env.PORT || 3000;

// ───── Routes ─────

app.get("/", (req, res) => {
  res.json({ message: "Serveur Node.js sur Firebase App Hosting !" });
});

app.get("/hello/:nom", (req, res) => {
  res.json({ message: `Bonjour, ${req.params.nom} !` });
});

app.post("/echo", (req, res) => {
  res.json({ recu: req.body });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route introuvable" });
});

// ───── Démarrage ─────
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});