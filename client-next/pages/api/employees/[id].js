import { EMPLOYEES } from "./data";

export default function handler(req, res) {
  const { id } = req.query;

  const employeeData = EMPLOYEES.find((emp) => emp.id === parseInt(id));

  if (employeeData) {
    res.status(200).json({ data: employeeData });
  } else {
    res.status(404).json({ error: { message: "Employee Not Found" } });
  }
}
