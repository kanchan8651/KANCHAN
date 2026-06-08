require("dotenv").config();

const express = require("express");
const cors = require("cors");
const api = require("./config/prisma");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await api.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  console.log(req.body);
  const { email, name } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: "email is required" });
  }

  try {
    const user = await api.user.create({ data: { email, name } });
    res.status(201).json(user);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "email already exists" });
    }

    res.status(500).json({ message: "failed to create user" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`));
