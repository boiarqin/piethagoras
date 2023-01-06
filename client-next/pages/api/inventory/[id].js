import { INVENTORY } from "./data";

export default function handler(req, res) {
  const { id } = req.query;

  const itemData = INVENTORY.find((inv) => inv.id === parseInt(id));

  if (itemData) {
    res.status(200).json({ data: itemData });
  } else {
    res.status(404).json({ error: { message: "Item Not Found" } });
  }
}
