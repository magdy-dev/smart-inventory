<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4c6a4d21-6599-4989-a5f1-7df1fbe77edc" />📦 Smart Inventory App

This is a simple full-stack inventory management application built using SAP CAP for the backend and SAP Fiori Elements for the frontend.

It allows you to manage products with basic CRUD operations like create, read, update, and delete.

🛠️ Tech Stack
Node.js (SAP CAP framework)
CDS (Core Data Services)
SAP Fiori Elements (UI5)
OData V4
SQLite (default local DB)
📁 Project Structure

smart-inventory/

├── db/ → Database models
├── srv/ → Backend services
├── app/
│ └── inventory-ui/ → Fiori UI application
├── package.json
└── README.md

🚀 How to Run the Project
1. Start backend

cd smart-inventory
cds watch

Backend runs on:

http://localhost:4004

2. Start frontend

cd app/inventory-ui
npm install
npm start

Frontend runs on:

http://localhost:8080

📊 Features
Display list of products
Create new product
Edit product details
Delete product
Basic validation for required fields (price, stock)
📦 Data Model

entity Products {

key ID : UUID;
name : String;
price : Decimal(10,2);
stock : Integer;

}

🔗 API Endpoint

/odata/v4/catalog/Products

🧠 Notes
This project is for learning SAP CAP and Fiori Elements
UI is generated using Fiori List Report template
Backend automatically exposes OData service
👨‍💻 Author

Junior SAP Developer



