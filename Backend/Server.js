// const admin = require("firebase-admin");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// require('dotenv').config();


// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Configure storage for uploaded files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Save files in "uploads" directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
//   },
// });

// const upload = multer({ storage });

// // Upload endpoint
// app.post("/upload", upload.fields([{ name: "certificate" }, { name: "video" }]), (req, res) => {
//   try {
//     const files = req.files;
//     if (!files) {
//       return res.status(400).json({ message: "No files uploaded" });
//     }

//     res.status(200).json({
//       message: "Files uploaded successfully",
//       certificate: files.certificate ? files.certificate[0].path : null,
//       video: files.video ? files.video[0].path : null,
//     });
//   } catch (error) {
//     console.error("Error uploading files:", error);
//     res.status(500).json({ message: "Failed to upload files" });
//   }
// });

// // Initialize Firebase Admin SDK
// const serviceAccount = require(process.env.SERVICEACCOUNTPATH);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// const firestore = admin.firestore();

// // List Users Endpoint (with Firestore data)
// app.get("/list-users", async (req, res) => {
//   try {
//     const listUsersResult = await admin.auth().listUsers(1000);

//     // Fetch Firestore data for each user
//     const usersWithDetails = await Promise.all(
//       listUsersResult.users.map(async (user) => {
//         const userDoc = await firestore.collection("users").doc(user.uid).get();
//         const firestoreData = userDoc.exists ? userDoc.data() : {};
//         return {
//           uid: user.uid,
//           email: user.email,
//           customClaims: user.customClaims || {},
//           firestoreData, // Add Firestore data
//         };
//       })
//     );

//     res.json(usersWithDetails);
//   } catch (error) {
//     console.error("Error listing users:", error);
//     res.status(500).json({ message: "Failed to fetch users" });
//   }
// });

// // Create User Endpoint (with Firestore entry)
// app.post("/create-user", async (req, res) => {
//   const { email, password, firestoreData } = req.body;
//   try {
//     const userRecord = await admin.auth().createUser({ email, password });

//     // Add Firestore data for the new user
//     if (firestoreData) {
//       await firestore.collection("users").doc(userRecord.uid).set(firestoreData);
//     }

//     res.json({ message: "User created successfully", user: userRecord });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: "Failed to create user" });
//   }
// });

// // Update User Endpoint (with Firestore update)
// app.put("/update-user/:uid", async (req, res) => {
//   const { uid } = req.params;
//   const { email, customClaims, firestoreData } = req.body;
//   try {
//     const userRecord = await admin.auth().updateUser(uid, { email });

//     // Update custom claims
//     if (customClaims) {
//       await admin.auth().setCustomUserClaims(uid, customClaims);
//     }

//     // Update Firestore data
//     if (firestoreData) {
//       await firestore.collection("users").doc(uid).update(firestoreData);
//     }

//     res.json({ message: "User updated successfully", user: userRecord });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ message: "Failed to update user" });
//   }
// });

// // Delete User Endpoint (with Firestore deletion)
// app.delete("/delete-user/:uid", async (req, res) => {
//   const { uid } = req.params;
//   try {
//     await admin.auth().deleteUser(uid);

//     // Remove Firestore data for the user
//     await firestore.collection("users").doc(uid).delete();

//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).json({ message: "Failed to delete user" });
//   }
// });




// // Activate User Endpoint
// app.put("/activate-user/:uid", async (req, res) => {
//   const { uid } = req.params;
//   try {
//     // Set a custom claim to mark the user as active
//     await admin.auth().setCustomUserClaims(uid, { active: true });

//     // Update Firestore to reflect the activation
//     await firestore.collection("users").doc(uid).update({ active: true });

//     res.json({ message: "User activated successfully" });
//   } catch (error) {
//     console.error("Error activating user:", error);
//     res.status(500).json({ message: "Failed to activate user" });
//   }
// });

// // Deactivate User Endpoint
// app.put("/deactivate-user/:uid", async (req, res) => {
//   const { uid } = req.params;
//   try {
//     // Set a custom claim to mark the user as inactive
//     await admin.auth().setCustomUserClaims(uid, { active: false });

//     // Update Firestore to reflect the deactivation
//     await firestore.collection("users").doc(uid).update({ active: false });

//     res.json({ message: "User deactivated successfully" });
//   } catch (error) {
//     console.error("Error deactivating user:", error);
//     res.status(500).json({ message: "Failed to deactivate user" });
//   }
// });



// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();

// Middleware
app.use(cors());  // Moved before bodyParser
app.use(bodyParser.json()); // No need to duplicate this line

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "uploads/";
    
    // Ensure the uploads directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    cb(null, uploadDir); // Save files in "uploads" directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
  },
});

const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.fields([{ name: "certificate" }, { name: "video" }]), (req, res) => {
  try {
    const files = req.files;
    if (!files) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    res.status(200).json({
      message: "Files uploaded successfully",
      certificate: files.certificate ? files.certificate[0].path : null,
      video: files.video ? files.video[0].path : null,
    });
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({ message: "Failed to upload files" });
  }
});

// Initialize Firebase Admin SDK
const serviceAccount = require(process.env.SERVICEACCOUNTPATH);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const PORT = 5000;
const firestore = admin.firestore();

// List Users Endpoint (with Firestore data)
app.get("/list-users", async (req, res) => {
  try {
    const listUsersResult = await admin.auth().listUsers(1000);

    // Fetch Firestore data for each user
    const usersWithDetails = await Promise.all(
      listUsersResult.users.map(async (user) => {
        const userDoc = await firestore.collection("users").doc(user.uid).get();
        const firestoreData = userDoc.exists ? userDoc.data() : {};
        return {
          uid: user.uid,
          email: user.email,
          customClaims: user.customClaims || {},
          firestoreData, // Add Firestore data
        };
      })
    );

    res.json(usersWithDetails);
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Create User Endpoint (with Firestore entry)
app.post("/create-user", async (req, res) => {
  const { email, password, firestoreData } = req.body;
  try {
    const userRecord = await admin.auth().createUser({ email, password });

    // Add Firestore data for the new user
    if (firestoreData) {
      await firestore.collection("users").doc(userRecord.uid).set(firestoreData);
    }

    res.json({ message: "User created successfully", user: userRecord });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

// Update User Endpoint (with Firestore update)
app.put("/update-user/:uid", async (req, res) => {
  const { uid } = req.params;
  const { email, customClaims, firestoreData } = req.body;
  try {
    const userRecord = await admin.auth().updateUser(uid, { email });

    // Update custom claims
    if (customClaims) {
      await admin.auth().setCustomUserClaims(uid, customClaims);
    }

    // Update Firestore data
    if (firestoreData) {
      await firestore.collection("users").doc(uid).update(firestoreData);
    }

    res.json({ message: "User updated successfully", user: userRecord });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
});

// Delete User Endpoint (with Firestore deletion)
app.delete("/delete-user/:uid", async (req, res) => {
  const { uid } = req.params;
  try {
    await admin.auth().deleteUser(uid);

    // Remove Firestore data for the user
    await firestore.collection("users").doc(uid).delete();

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
});

// Activate User Endpoint
app.put("/activate-user/:uid", async (req, res) => {
  const { uid } = req.params;
  try {
    // Set a custom claim to mark the user as active
    await admin.auth().setCustomUserClaims(uid, { active: true });

    // Update Firestore to reflect the activation
    await firestore.collection("users").doc(uid).update({ active: true });

    res.json({ message: "User activated successfully" });
  } catch (error) {
    console.error("Error activating user:", error);
    res.status(500).json({ message: "Failed to activate user" });
  }
});

// Deactivate User Endpoint
app.put("/deactivate-user/:uid", async (req, res) => {
  const { uid } = req.params;
  try {
    // Set a custom claim to mark the user as inactive
    await admin.auth().setCustomUserClaims(uid, { active: false });

    // Update Firestore to reflect the deactivation
    await firestore.collection("users").doc(uid).update({ active: false });

    res.json({ message: "User deactivated successfully" });
  } catch (error) {
    console.error("Error deactivating user:", error);
    res.status(500).json({ message: "Failed to deactivate user" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
