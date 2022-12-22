import { EMPLOYEES } from "./data";

export default function handler(req, res) {
    const {id} = req.query;

    res.status(200).json({ data: EMPLOYEES.find(emp => emp.id === parseInt(id))});
}