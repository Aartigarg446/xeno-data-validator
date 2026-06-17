# 🚀 Xeno AI Transaction Validator

![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-API-black)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-success)
![Render](https://img.shields.io/badge/Backend-Render-purple)

Enterprise-grade AI-powered CSV Transaction Validation Platform built using React.js, Node.js, Express.js, and advanced validation logic.

---

## 🌐 Live Demo

### Frontend

https://xeno-data-validator.vercel.app

### Backend API

https://xeno-data-validator-backend.onrender.com

---

## 📌 Problem Statement

Organizations frequently receive large transaction datasets containing invalid phone numbers, missing fields, incorrect dates, and unsupported payment methods.

Manual validation is time-consuming, error-prone, and difficult to scale.

Xeno AI Transaction Validator automates this process by validating, cleaning, analyzing, and generating downloadable reports for transaction datasets through a modern web interface.

---

## 🎯 Project Highlights

✔ Multi-Country Transaction Validation

✔ CSV Schema Validation

✔ AI-Powered Data Quality Analysis

✔ Country Analytics Dashboard

✔ Validation Report Generator

✔ Cleaned CSV Export

✔ Full Stack Deployment

✔ Enterprise-Style Dashboard

✔ Real-Time Validation Feedback

---

## ✨ Features

### 🛡 CSV Schema Validation

Before processing any dataset, the system verifies whether all required columns exist.

Required Columns:

* order_id
* product_name
* phone
* country
* date
* payment_mode

Invalid CSV files are automatically rejected with detailed feedback.

---

### 🌍 Multi-Country Validation Engine

Country-specific validation rules:

#### India

* Exactly 10 digits

#### Singapore

* Exactly 8 digits

The architecture is easily extendable for additional countries.

---

### 📅 Date Validation

Validates transaction dates using:

YYYY-MM-DD

Invalid formats are detected and flagged automatically.

---

### 💳 Payment Mode Validation

Supported Payment Modes:

* UPI
* Cash
* Card

Unsupported values are marked invalid.

---

### 🤖 AI Data Quality Score

Automatically calculates dataset quality based on validation success rate.

Example:

* Total Records: 100
* Valid Records: 85

Quality Score:

85%

This provides a quick overview of dataset reliability.

---

### 📊 AI Validation Insights

Generates intelligent validation insights including:

* Invalid record count
* Validation status
* Dataset quality score
* Processing summary

---

### 🌎 Country Analytics Dashboard

Provides country-wise analytics including:

* Total Records
* Valid Records
* Invalid Records

Helps identify regional data quality issues.

---

### 📁 File Summary Dashboard

Displays:

* Total Records
* Valid Records
* Invalid Records
* Countries Detected
* Validation Success Rate

---

### 📄 Validation Report Generator

Automatically generates downloadable reports containing:

* Total Records
* Valid Records
* Invalid Records
* Phone Validation Errors
* Date Validation Errors
* Payment Validation Errors
* Data Quality Score

---

### 📥 Cleaned CSV Export

Exports validated records into a cleaned CSV file suitable for:

* Data Warehousing
* Analytics Pipelines
* Reporting Systems
* Business Intelligence Tools

---

## 🔄 Application Workflow

1. Upload CSV Dataset
2. Validate CSV Schema
3. Validate Phone Numbers
4. Validate Dates
5. Validate Payment Modes
6. Generate AI Insights
7. Calculate Data Quality Score
8. Generate Country Analytics
9. Create Validation Report
10. Download Cleaned Dataset

---

## 🛠 Tech Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* Multer
* CSV Parser

### Deployment

* Vercel
* Render

### Data Processing

* File System (FS)
* Custom Validation Engine

---

## 📂 Project Structure

```text
xeno-data-validator
│
├── frontend
│   ├── src
│   ├── App.jsx
│   ├── App.css
│   └── package.json
│
├── backend
│   ├── server.js
│   ├── validator.js
│   ├── uploads
│   ├── output
│   └── package.json
│
└── README.md
```

---

## 📸 Application Screenshots

### 🏠 Home Dashboard

![Home Dashboard](https://github.com/Aartigarg446/xeno-data-validator/blob/main/home.png?raw=true)

---

### 📤 CSV Upload Interface

![Upload](https://github.com/Aartigarg446/xeno-data-validator/blob/main/upload.png?raw=true)

---

### 🛡 Schema Validation

![Schema Validation](https://github.com/Aartigarg446/xeno-data-validator/blob/main/schema-validation.png?raw=true)

---

### 📊 File Summary Dashboard

![File Summary](https://github.com/Aartigarg446/xeno-data-validator/blob/main/filesummary1.png?raw=true)

---

### 🌎 Country Analytics Dashboard

![Country Analytics](https://github.com/Aartigarg446/xeno-data-validator/blob/main/countryanalytics.png?raw=true)

---

### 📁 Cleaned CSV Export

![Cleaned CSV](https://github.com/Aartigarg446/xeno-data-validator/blob/main/cleaned.csv.png?raw=true)

---

### 📄 Validation Report

![Validation Report](https://github.com/Aartigarg446/xeno-data-validator/blob/main/validationreport.png?raw=true)

---

## 📊 Sample Dataset Format

```csv
order_id,product_name,phone,country,date,payment_mode

1001,Laptop,9876543210,India,2026-06-17,UPI
1002,Phone,12345,India,2026-06-17,Cash
```

---

## 🚀 Future Enhancements

* AI Anomaly Detection
* Fraud Detection Engine
* Interactive Charts
* Role-Based Access Control
* Database Integration
* Real-Time Streaming Validation
* Batch File Processing
* Cloud Storage Integration

---

## 💼 Business Use Cases

* FinTech Platforms
* Banking Systems
* E-Commerce Applications
* Analytics Pipelines
* Data Migration Projects
* Transaction Monitoring Systems

---

## 👨‍💻 Author

**Aarti Garg**

Computer Science Engineering Student

Built as part of the Xeno Software Engineering Assignment.

---

⭐ If you found this project useful, consider giving the repository a star.
