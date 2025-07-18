# 📝 ThinkYr - Your Smart Note-Taking App (MERN Stack)


**ThinkYr** is a full-stack note-taking web application designed to provide a smooth, fast, and secure experience for personal productivity. Built with the **MERN** stack and enhanced by real-world production tools like Redis-based rate limiting and RESTful APIs, it delivers a minimal yet robust platform for managing notes efficiently.

This project is optimized for showcasing backend API design, frontend UI/UX using modern frameworks, rate-limiting, REST principles, and MongoDB-powered data persistence — making it ideal for internship applications at FAANG and top product companies.

---

## 🧰 Tech Stack & Tools

### 🖥️ Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge\&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge\&logo=redis\&logoColor=white)
![Rate Limiting](https://img.shields.io/badge/Rate--Limit-via%20Redis-blue?style=for-the-badge)

### 🎨 Frontend

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge\&logo=react\&logoColor=61dafb)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-%23E5E7EB?style=for-the-badge\&logo=daisyui\&logoColor=black)
![React Router](https://img.shields.io/badge/React--Router-CA4245?style=for-the-badge\&logo=reactrouter\&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/Hot--Toast-FF6B6B?style=for-the-badge)

### 🛠 Dev Tools

![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge\&logo=nodemon\&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-000000?style=for-the-badge\&logo=dotenv\&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge\&logo=axios\&logoColor=white)

---

## 🚀 Features

* 📝 Add, update, delete personal notes
* 👤 User-based note segregation via MongoDB schemas
* 🚦 Rate-limiting using Upstash Redis (abuse prevention)
* 📃 Clean UI with DaisyUI & TailwindCSS
* 🚀 Optimized API design with modular routes and middleware
* 📥 Responsive and mobile-friendly design

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```env
MONGODB_URI=your_mongo_uri
PORT=5001

UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token

NODE_ENV=production
```

---

## 💻 Running Locally

```bash
git clone https://github.com/CodeCenturian/ThinkYr.git
cd ThinkYr
npm install
```

* Add your `.env` values
* Start the backend:

```bash
npm run dev
```

> App will be running on: [http://localhost:5001](http://localhost:5001)

---

## 📦 Folder Structure (Server)

```
📦server
 ┣ 📂controllers    // logic for note CRUD
 ┣ 📂models         // Mongoose schemas
 ┣ 📂routes         // Express routes
 ┣ 📂middleware     // rate limiter
 ┣ 📄server.js      // entry point
 ┗ 📄.env
```

---

## 📚 API Reference

### 📌 Notes

```http
GET    /api/notes          // Get all notes for a user
POST   /api/notes          // Create a new note
PUT    /api/notes/:id      // Update note by ID
DELETE /api/notes/:id      // Delete note by ID
```

> ⚙️ Each note is associated with a user — logic handled server-side.

---

## 🔎 Internship-Optimized Highlights

This project demonstrates:

* ✅ Scalable CRUD operations
* ✅ RESTful API design
* ✅ Rate-limiting using Redis (Upstash)
* ✅ Component-based React UI
* ✅ Mobile responsiveness
* ✅ .env configuration, modular code

Ideal for backend-focused roles and full-stack internship portfolios.

---

## 📬 Contact

* 📧 Email: [ashutoshkumariiitb@gmail.com](mailto:ashutoshkumariiitb@gmail.com)


---

> *"ThinkYr – Because your thoughts deserve structure."* ✨
