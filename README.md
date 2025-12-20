# 💸 Expense Sharing App (Backend) — MERN Stack

A backend system for an **Expense Sharing Application** similar to Splitwise.  
This project allows users to create groups, add shared expenses, calculate balances, and settle dues.  
Built using **Node.js, Express, MongoDB (Mongoose)**.

---

## 🚀 Features

### 👥 Users
- Create and manage users
- Store basic user information (name, email)

### 👨‍👩‍👧 Groups
- Create groups with multiple members
- Each group contains users and expenses

### 💰 Expenses
Supports three split types:
- **Equal split**
- **Exact split**
- **Percentage split**

### 🧮 Balance Management
- Tracks who owes whom
- Maintains simplified balances
- Allows **settlement** between users

---

## 🧱 Tech Stack

| Layer      | Technology |
|------------|------------|
| Backend    | Node.js, Express.js |
| Database   | MongoDB, Mongoose |
| Tools      | Postman / Thunder Client |
| Version Control | Git, GitHub |

---

## 📂 Folder Structure
expense-sharing-app/
│── server.js
│── package.json
│── .gitignore
│── README.md
│── /config
│ └── db.js
│── /controllers
│ ├── userController.js
│ ├── groupController.js
│ ├── expenseController.js
│ └── balanceController.js
│── /models
│ ├── User.js
│ ├── Group.js
│ ├── Expense.js
│ └── Balance.js
│── /routes
│ ├── userRoutes.js
│ ├── groupRoutes.js
│ ├── expenseRoutes.js
│ └── balanceRoutes.js
│── .env.example


---

## ⚙️ Installation & Setup

### 🔧 1. Clone the repository
`bash
git clone https://github.com/<your-username>/expense-sharing-app.git
cd expense-sharing-app
🔧 2. Install dependencies
npm install

🔧 3. Create .env file

Create a file named .env in the root folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/expenseApp


(Use your own MongoDB connection string.)

🔧 4. Start the server
npm run dev


Server runs on:

http://localhost:5000

🛠 API Endpoints
👤 User Routes
Method	Endpoint	Description
POST	/api/users	Create user
GET	/api/users	Get all users
👨‍👩‍👧 Group Routes
Method	Endpoint	Description
POST	/api/groups	Create group
💰 Expense Routes
Method	Endpoint	Description
POST	/api/expenses	Add expense (equal/exact/percent split)
📊 Balance Routes
Method	Endpoint	Description
GET	/api/balances	Get all balances
GET	/api/balances/user/:id	Get balance for a user
GET	/api/balances/group/:groupId	Get balances for a group
POST	/api/balances/settle	Settle dues between users
🧪 Testing Your API

You can test using:

✔ Postman
✔ Thunder Client (VS Code extension)
✔ Browser (GET requests only)
✔ cURL commands
📝 Example POST Request (Add Expense)
{
  "groupId": "64a2f0d83a...",
  "paidBy": "64a2ef953a...",
  "amount": 1000,
  "splitType": "EQUAL",
  "participants": [
    "64a2ef953a...",
    "64a2ef983a...",
    "64a2ef9a3a..."
  ]
}


//FRONTEND
📘 README.md (Frontend)
Expense Sharing App — Frontend (React.js)

This is the frontend for the Expense Sharing Application, inspired by Splitwise.
It connects with the Node.js + Express + MongoDB backend to allow users to:

Create Users

Create Groups

Add Shared Expenses

View Simplified Balances

Settle Dues

This frontend is built using React, Axios, and React Router.

🚀 Live Features

Add User

Create Group using User IDs

Add Equal Split Expense

View All Balances

Settle Between Two Users

Clean and simple UI for demonstration

🛠 Tech Stack

React.js

Axios

React Router DOM

JavaScript

HTML / CSS

Node.js (backend dependency)

📦 Folder Structure
src/
 ├── api/
 │     └── api.js              # Axios instance (backend URL)
 ├── components/
 │     └── NavBar.js           # Navigation bar
 ├── pages/
 │     ├── AddUser.js          # Create user page
 │     ├── AddGroup.js         # Create group using user IDs
 │     ├── AddExpense.js       # Add equal-split expenses
 │     ├── ViewBalances.js     # Display all balances
 │     ├── SettleBalance.js    # Settle dues between users
 ├── App.js                    # Routing & structure
 ├── index.js                  # Main entry point

⚙️ Installation & Setup
1. Clone the Repo
git clone https://github.com/bt22eee076/expense-sharing-frontend.git
cd expense-sharing-frontend

2. Install Dependencies
npm install

3. Start Development Server
npm start


Frontend runs at:

http://localhost:3000

🔗 Backend Connection

The frontend communicates with backend using Axios at:

📌 /src/api/api.js

export default axios.create({
  baseURL: "http://localhost:5000/api" 
});


Replace with  deployed backend URL if needed:

https://your-render-app.onrender.com/api

🧪 How to Test Functionality
✔ Add User

Enter user name & email → click "Create User"

✔ Create Group

Enter group name → list member ObjectIds separated by commas.

✔ Add Expense

Supports Equal Split → backend automatically updates balances.

✔ View Balances

Shows who owes whom.

✔ Settle Balance

Enter user1 ID, user2 ID, and amount → dues are updated.

📤 Deployment (Netlify Recommended)

Build project:

npm run build


Upload the /build folder to Netlify

Your frontend goes live!





👨‍💻 Author

Ayush
Expense Sharing MERN App Developer
Focused on backend architecture, API design, and clean frontend integration.

🤝 Contribution

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

AYUSHRAJ


Email: jadhavakshith466@gmail.com


---

