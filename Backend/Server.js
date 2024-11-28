const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Firebase Admin SDK
const serviceAccount = require("./login-cbd62-firebase-adminsdk-qdacy-3dd7c33c6d.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// List Users Endpoint
app.get("/list-users", async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers(1000);
    const users = listUsersResult.users.map((user) => ({
      uid: user.uid,
      email: user.email,
      customClaims: user.customClaims || {},
    }));
    res.json(users);
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Create User Endpoint
app.post("/create-user", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.json({ message: "User created successfully", user: userRecord });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

// Update User Endpoint
app.put("/update-user/:uid", async (req, res) => {
  const { uid } = req.params;
  const { email, customClaims } = req.body;
  try {
    const userRecord = await admin.auth().updateUser(uid, { email });
    if (customClaims) {
      await admin.auth().setCustomUserClaims(uid, customClaims);
    }
    res.json({ message: "User updated successfully", user: userRecord });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
});

// Delete User Endpoint
app.delete("/delete-user/:uid", async (req, res) => {
  const { uid } = req.params;
  try {
    await admin.auth().deleteUser(uid);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
