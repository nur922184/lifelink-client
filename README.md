# LifeLinkDB Dashboard

Welcome to the **LifeLinkDB Dashboard**! This is the admin panel for managing user biodata and payments efficiently.

## 🌐 Live Site
- [LifeLinkDB Dashboard](https://my-final-project-36ab9.web.app/)

## 🛠️ Installation & Setup

### Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/lifelinkdb-dashboard.git
   ```
2. **Navigate into the Project Directory:**
   ```sh
   cd lifelinkdb-dashboard
   ```
3. **Install Dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. **Create a `.env` File:**
   Set up environment variables by creating a `.env` file in the root directory with the following:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_STRIPE_PUBLIC_KEY=your-stripe-key
   ```
5. **Start the Development Server:**
   ```sh
   npm run dev
   ```
   The project will run at `http://localhost:5173`.

## 🚀 Features

### 📊 Dashboard Insights
1. **Total Biodata Count** - View the total number of biodata records in the database.
2. **Male & Female Biodata Counts** - Monitor gender-based biodata records for better insights.
3. **Premium Biodata Count** - Track the number of premium users with upgraded access.
4. **Revenue Dashboard** - Displays total revenue generated from purchasing contact information.
5. **Interactive Dashboard Cards** - Key metrics displayed with visually appealing icons and values.
6. **User-Friendly Table Interface** - Detailed records with actionable buttons like delete for quick management.
7. **Real-Time Updates** - Ensures accurate and up-to-date information.

### 🔐 Security & Accessibility
8. **Secure Login** - Admin-only access ensures data confidentiality and integrity.
9. **Responsive Design** - Fully optimized for mobile, tablet, and desktop screens.
10. **Scalable Codebase** - Built using modern technologies like React and Tailwind CSS for maintainability.

## 📌 How to Use
1. **Login** using the provided admin credentials.
2. **Navigate** through the dashboard to view various metrics.
3. **Manage** biodata and payment details using the available tools.

## 📦 Build for Production
To create an optimized production build:
```sh
npm run build
```
After building, preview the production version:
```sh
npm run preview
```

## 🛠 Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Icons & UI Enhancements:** React Icons, DaisyUI

## 🏗️ Linting & Formatting
To lint the project:
```sh
npm run lint
```

## 🤝 Contribution Guidelines
Want to contribute? Feel free to fork the repository and submit a pull request for improvements or bug fixes!

---
For any queries or support, contact us at **support@lifelinkdb.com**. 🚀

