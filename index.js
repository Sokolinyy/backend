import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import blogsRoutes from "./routes/blogs.js";

// Set the server port to the value from the environment variable or use the default 3000
const PORT = process.env.PORT || 4000;

// Create a new Express application
const app = express();

// Load environment variables from the .env file using dotenv
dotenv.config();

// Connect to mongoose
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(cors());
// Make, that express can work with json files
app.use(express.json());

//Routes
app.use("/", blogsRoutes);
app.use("/create-blog", blogsRoutes);
app.use("/blog", blogsRoutes);

// Listen for request
app.listen(PORT, () => {
  console.log(`Server is running`);
});
