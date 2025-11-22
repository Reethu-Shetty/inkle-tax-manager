# 🌐 Inkle Tax Manager  
Frontend assignment for Inkle — Taxes Dashboard with inline editing, built using **React + Vite + TanStack Table + Axios**.

This project implements a tax management interface with data fetched from MockAPI, a dynamic table, and an edit modal that updates entries via PUT requests.  
The UI follows modern dashboard-style UX with pills, shadows, responsive layout, and smooth interactions.

---

## 🚀 Features

### ✅ 1. **Landing Page – Taxes Table**
- Displays tax records in a clean and responsive table.
- Built using **@tanstack/react-table v8**.
- Columns displayed:  
  - **ID**  
  - **Name**  
  - **Country**  
  - **Gender**  
  - **Entity**  
  - **Request Date**  
  - **Created At**  
  - **Edit Action**

---

## ✏ 2. **Row Editing**
- Each row includes an **edit (✏) icon**.
- Clicking opens a fully responsive **popup modal**.
- Editable fields:
  - **Name**
  - **Country** (dynamic dropdown)

---

## 🌍 3. **Country Dropdown (API-driven)**
Countries list is fetched from:



GET [https://685013d7e7c42cfd17974a33.mockapi.io/countries](https://685013d7e7c42cfd17974a33.mockapi.io/countries)



The dropdown always shows the latest list of countries.

---

## 🔄 4. **Update (PUT) Functionality**
On save:

- Merges old data + changed fields  
- Sends a **PUT request** to:


[https://685013d7e7c42cfd17974a33.mockapi.io/taxes/:id](https://685013d7e7c42cfd17974a33.mockapi.io/taxes/:id)

`
- Updates UI instantly  
- Shows a “Saving…” state during the request  

Example payload:

json
{
"id": "1",
"name": "Updated Name",
"country": "India",
"gender": "female",
"entity": "Pragati",
"requestDate": "Jun 15, 2025",
"createdAt": "2025-06-15T13:56:45.521Z"
}
`

---

## 🎨 5. **Modern UI/UX**

* Dashboard-card design
* Soft shadows, rounded corners, clean spacing
* Colored pills:

  * **Gender** → Pink / Blue / Gray
  * **Entity** → Indigo
* Smooth hover on rows
* Responsive for mobile screens
* Modern color palette

---

## 🧰 Tech Stack

| Tool                      | Purpose                   |
| ------------------------- | ------------------------- |
| **React 18**              | Frontend UI               |
| **Vite (Rolldown)**       | Fast bundler & dev server |
| **@tanstack/react-table** | Table rendering           |
| **Axios**                 | API calls                 |
| **MockAPI.io**            | Fake backend              |
| **Custom CSS**            | UI/UX styling             |

---

## 📡 API Endpoints Used

### 📁 Taxes


GET  https://685013d7e7c42cfd17974a33.mockapi.io/taxes
PUT  https://685013d7e7c42cfd17974a33.mockapi.io/taxes/:id


### 🌍 Countries


GET https://685013d7e7c42cfd17974a33.mockapi.io/countries


---

## 📁 Project Structure


inkle-tax-manager/
│
├── public/
├── src/
│   ├── components/
│   │   ├── DataTable.jsx
│   │   └── EditTaxModal.jsx
│   ├── App.jsx
│   ├── api.js
│   ├── main.jsx
│   └── styles.css
│
├── package.json
├── vite.config.js
└── README.md


---

## 🖥 Running the Project Locally

### 1️⃣ Install dependencies

bash
npm install


### 2️⃣ Start development server

bash
npm run dev


### 3️⃣ Open your browser


http://localhost:5173


---

## 📌 Assignment Requirements Checklist

| Requirement                     | Status        |
| ------------------------------- | ------------- |
| Landing page with taxes table   | ✅ Completed   |
| TanStack Table v8               | ✅ Used        |
| Edit icon per row               | ✅ Added       |
| Edit modal                      | ✅ Working     |
| Editable fields (Name, Country) | ✅ Done        |
| Country dropdown from API       | ✅ Working     |
| PUT request on Save             | ✅ Implemented |
| Merge updated + existing data   | ✅ Done        |
| Update table UI after save      | ✅ Done        |
| Good UI & UX                    | ✅ Achieved    |
| Bonus polish                    | ⭐ Yes         |

---

## 🙋‍♀ Author

**Reethu Shetty**
Frontend Developer
GitHub: [https://github.com/Reethu-Shetty](https://github.com/Reethu-Shetty)

---

## 🎉 Final Notes

This project fully satisfies all functional and UI requirements of the **Inkle Frontend Internship Assignment**.
