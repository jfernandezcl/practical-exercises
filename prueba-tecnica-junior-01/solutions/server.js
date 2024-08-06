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
