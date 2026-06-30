<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4c6a4d21-6599-4989-a5f1-7df1fbe77edc" />
<img width="1920" height="1080" alt="Screenshot (68)" src="https://github.com/user-attachments/assets/338996b9-37af-4ae1-b381-d696e43867a7" />
<img width="1920" height="1080" alt="Screenshot (84)" src="https://github.com/user-attachments/assets/61608e30-3466-4f08-a5c9-717563737fe4" />

<img width="1920" height="1080" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/77e5dbf3-a983-44eb-8e34-65a02b094ca8" />

<img width="1920" height="1080" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/f811d43d-d436-4bc1-a965-200d99f3fb2d" />

<img width="1920" height="1080" alt="Screenshot (87)" src="https://github.com/user-attachments/assets/1373f8dc-c1cd-4ce6-8df9-82cb0a648407" />

📦 Smart Inventory App

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



