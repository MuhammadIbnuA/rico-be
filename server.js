const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3001;

// Replace <password> with your actual password
const uri = "mongodb+srv://ricorico:ricorico@clustercc0.rx63nwy.mongodb.net/?retryWrites=true&w=majority";
const userController = require("./controller/usercontroller");
const menuController = require("./controller/menucontroller");
const isAuthenticated = require("./middleware/authmiddleware");

// Create a new menu
app.post("/menu", menuController.createMenu);

// Get a menu by ID
app.get("/menu/:id", menuController.getMenuById);

// Get all menus
app.get("/menu", isAuthenticated, menuController.getAllMenus);

// Update a menu by ID
app.put("/menu/:id", menuController.updateMenu);

// Delete a menu by ID
app.delete("/menu/:id", menuController.deleteMenu);

// Register a new user
app.post("/register", userController.registerUser);

// Login
app.post("/login", userController.login);


mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
