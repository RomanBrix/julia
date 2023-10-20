require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const newsRoute = require("./routes/news");

const PORT = process.env.SERVER_PORT || 5000;

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json({ limit: "105mb" }));

app.get("/", (req, res) => {
    res.status(200).send("ok");
});
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/news", newsRoute);
// app.use();

app.listen(PORT, () => {
    console.log("Backend server is running! port:  " + PORT);
});
