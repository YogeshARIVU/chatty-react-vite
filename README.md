# 💬 Chatty - React + Vite Chat App

A real-time chat application built using **React**, **Vite**, and **Axios**, connected to a **Spring Boot backend** deployed on **Railway**. Users can register, login, and exchange messages through a RESTful API.

---

## 🔧 Technologies Used

- ⚛️ React
- ⚡ Vite
- 🪝 React Hooks
- 📦 Axios
- 🎨 CSS / Tailwind (optional)
- 🔐 JWT Authentication
- 🌐 Deployed on [Railway](https://railway.app/)

---

## 🚀 Features

- ✅ User Registration & Login
- ✅ JWT-based Authentication
- ✅ Send and Receive Chat Messages
- ✅ Backend API Integration
- ✅ Responsive UI
- ✅ Hosted on Railway (frontend + backend)

---




---

## 🔑 Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://your-backend-url.up.railway.app
# Clone the repository
git clone https://github.com/your-username/chatty-react-vite.git
cd chatty-react-vite

# Install dependencies
npm install

# Run the app locally
npm run dev
POST   /api/auth/register     - User registration
POST   /api/auth/login        - User login
GET    /api/chat/messages     - Get chat messages
POST   /api/chat/message      - Send a chat message

npm run build
npx serve dist

