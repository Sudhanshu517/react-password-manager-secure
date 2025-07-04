# 🔐 Secure Password Manager

A full-stack password manager web app to securely store and manage your passwords — built with **MERN Stack** and **Firebase Google Authentication**.

## 🚀 Features

- 🔐 Google Authentication via Firebase
- 🔒 AES Encryption for all stored passwords
- 📦 MongoDB Atlas for cloud storage
- 🎨 Responsive UI using React & Tailwind CSS
- ⚙️ CRUD operations for password entries
- ☁️ Hosted on Vercel (frontend) and Render (backend)

---

## 🧪 Live Demo

🌐 **Live Website**: [https://react-password-manager-secure.vercel.app/](https://react-password-manager-secure.vercel.app/)  
📂 **GitHub Repo**: [https://github.com/Sudhanshu517/react-password-manager-secure](https://github.com/Sudhanshu517/react-password-manager-secure)

> ✨ **Note**: Sign in with any Google account to try the app securely. All passwords are encrypted locally before storing in the cloud.

---

## 🛠️ Tech Stack

**Frontend**
- React
- Tailwind CSS
- Firebase Authentication (Google Login)

**Backend**
- Node.js
- Express.js
- MongoDB Atlas (Cloud DB)
- CryptoJS (AES encryption)

---

## 🗂️ Folder Structure

```
/client         → React frontend (Vite/Tailwind/Firebase Auth)
/server         → Express backend (API routes, MongoDB, CryptoJS)
/README.md
```

---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Sudhanshu517/react-password-manager-secure
cd React-PassOP
```

### 2. Setup Firebase Auth

- Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
- Enable **Google Sign-In** in Authentication
- Copy your Firebase config into `/client/src/firebaseConfig.js`

```js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 3. Setup Backend Environment Variables

Create a `.env` file inside `/server`:

```env
MONGO_URI=your_mongodb_connection_string
DB_NAME=your_db_name
```

---

### 4. Install Dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

---

### 5. Start the App

```bash
# In /server
npm run dev

# In /client (new terminal)
npm run dev
```

---

## ✅ To-Do (Future Improvements)

- Add search & filter to password list  
- Export/Import passwords securely  
- Add tags or categories for better organization  
- OTP or 2FA for extra protection

---

## 🙏 Acknowledgements

- Firebase for auth
- MongoDB Atlas for cloud database
- CryptoJS for AES encryption
- Vercel & Render for hosting

---

## 📬 Contact

Made with ❤️ by **Sudhanshu Sharma**  
[GitHub](https://github.com/Sudhanshu517) • [LinkedIn](https://www.linkedin.com/in/sudhanshusharma517/)
