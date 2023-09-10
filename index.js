const express = require("express");
const cors = require("cors");
const educationRoutes = require("./src/routes/EducationRoutes");
const experienceRoutes = require("./src/routes/ExperienceRoutes");
const languageRoutes = require("./src/routes/LanguageRoutes");
const projetRoutes = require("./src/routes/ProjetRoutes");
const skillRoutes = require("./src/routes/SkillRoutes");
const userRoutes = require("./src/routes/UserRoutes");
const messageRoutes = require("./src/routes/MessageRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/educations", educationRoutes);
app.use("/experiences", experienceRoutes);
app.use("/languages", languageRoutes);
app.use("/projects", projetRoutes);
app.use("/skills", skillRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(process.env.BORT, () =>
  console.log(`server is running in port ${process.env.BORT}`)
);

mongoose
  .connect(process.env.DATA_BASE_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));
