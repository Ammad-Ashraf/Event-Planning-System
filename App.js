const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventsRoutes");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();
const PORT = 6000;

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/events", authenticateToken, eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
