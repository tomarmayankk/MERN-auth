const express = require("express");
const connectToDatabase = require("./db"); // Import the Mongoose connection function
require("dotenv").config(); // Load environment variables from .env file
const app = express();
app.use(express.json());
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
app.use(cors());

// Connect to MongoDB Atlas via Mongoose
connectToDatabase();
async function startServer() {
  // Ensure the database is connected before starting the server
  await connectToDatabase();
  const port = process.env.PORT || 4000; // Use the port from environment variables or default to 4000
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
// Start the server
startServer();
app.use(userRoute);