require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// program middleware
app.use(cors());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());

try {
  mongoose.connect(
    process.env.DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log("⚡ Mongoose is connected ... ")
  );
} catch (error) {
  console.log("🧨🧨 ", error);
}

app.use("/todos", require("./routes/index"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  // const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Server started at port ${PORT}`));
