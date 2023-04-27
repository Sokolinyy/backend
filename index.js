import express from "express";
import cors from "cors";
import aboutRoutes from "./routes/about.js";
import blogRoutes from "./routes/blogs.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Set the server port to the value from the environment variable or use the default 3000
const PORT = process.env.PORT || 3000;

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
app.use("/", blogRoutes);
app.use("/about", aboutRoutes);
app.use("/create-blog", blogRoutes);

// Listen for request
app.listen(PORT, () => {
  console.log(`Server is running`);
});
