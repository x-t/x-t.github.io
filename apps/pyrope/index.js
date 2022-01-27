const express = require("express");
const { Deta } = require("deta");
const helmet = require("helmet");

const app = express();
const deta = new Deta();
const db = deta.Base("Pyrope");

app.use(express.json());
app.use(helmet());

const random_id = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
};

const can_put = (secret) => {
  const env = process.env.PUT_SECRET || "";
  if (env === "") return false;

  if (env === "public") return true;

  return env === secret;
};

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const dbres = await db.get(id);
  if (dbres.url) {
    res.redirect(303, dbres.url);
    return;
  }

  res.statusCode = 404;
  res.send("Not found");
});

app.put("/", async (req, res) => {
  let { url, id, secret } = req.body;

  if (!can_put(secret)) {
    res.statusCode = 403;
    res.send("Forbidden");
    return;
  }

  if (!url) {
    res.statusCode = 400;
    res.send("Bad request");
    return;
  }

  if (!id) {
    id = random_id();
  }

  try {
    await db.put({ url }, id);
    res.send({ id });
  } catch {
    res.statusCode = 500;
    res.send("Internal server error");
    return;
  }
});

module.exports = app;
