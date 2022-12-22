import { INVENTORY } from "./data";

export default function handler(req, res) {
    const {id} = req.query;

    res.status(200).json({ data: INVENTORY.find(inv => inv.id === parseInt(id))});
}