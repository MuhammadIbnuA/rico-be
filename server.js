const express = require("express");
const mongoose = require("mongoose");
const menuroute = require("./router/menuroute");
const userroute = require("./router/userroute");
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
router.post("/", menuController.createMenu);

// Get a menu by ID
router.get("/:id", menuController.getMenuById);

// Get all menus
router.get("/", isAuthenticated, menuController.getAllMenus);

// Update a menu by ID
router.put("/:id", menuController.updateMenu);

// Delete a menu by ID
router.delete("/:id", menuController.deleteMenu);

// Register a new user
router.post("/register", userController.registerUser);

// Login
router.post("/login", userController.login);


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
