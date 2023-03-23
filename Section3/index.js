// API components:
// - Authentication and Authorization
// - Investor Onboarding
// - Financial Asset Products Management
// - Sales Transactions
// - Investor Portal
// - Reporting
// - Integration with Third-Party Services

// JavaScript code:
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Dummy data
let customers = [
  { id: 1, name: "John Doe", balance: 5000 },
  { id: 2, name: "Jane Smith", balance: 10000 },
];

// Routes
app.get("/customers", (req, res) => {
  res.json(customers);
});

app.get("/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) return res.status(404).send("Customer not found");
  res.json(customer);
});

app.post("/customers", (req, res) => {
  const customer = req.body;
  customer.id = customers.length + 1;
  customers.push(customer);
  res.json(customer);
});

app.put("/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) return res.status(404).send("Customer not found");
  customer.name = req.body.name;
  customer.balance = req.body.balance;
  res.json(customer);
});

app.delete("/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) return res.status(404).send("Customer not found");
  const index = customers.indexOf(customer);
  customers.splice(index, 1);
  res.json(customer);
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
