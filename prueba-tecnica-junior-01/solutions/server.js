import express from "express";

export const app = express();

const items = [
  {
    id: 1,
    content: "Item 1",
  },
];

// Para recuperarlos todos
app.get("/items", (req, res) => {
  return res.json(items);
});

// Para recuperar uno solo
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemFound = items.find((item) => item.id === id);
  return res.json(itemFound);
});

// Para crear uno
app.post("/items", (req, res) => {
  const { content } = req.body;
  const newId = items.length + 1;
  const newItem = { id: newId, content };
  items.push(newItem);
  return res.json(newItem);
});

// Para actualizar
app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const itemFound = items.find((item) => item.id === id);
  itemFound.content = content;
  return res.json(itemFound);
});

// Para eliminar
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = item.find((item) => item.id === id);
  items.splice(itemIndex, 1);
  return res.status(200).json();
});
