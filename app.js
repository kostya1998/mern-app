import express from "express";
import config from "config";
import mongoose from "mongoose";
import router from "./routes/auth.routes.js";
import link_Router from "./routes/link.routes.js";
import redirect_Router from "./routes/redirect.routes.js";
import path from "path";
import __dirname from "./__dirname.js";

let app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", router);
app.use("/api/link", link_Router);
app.use("/t", redirect_Router);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
  });
}

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () =>
      console.log(` app has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log("Server Error:/", e.message);
    process.exit(1);
  }
}
start();
