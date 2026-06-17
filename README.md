# 🚀 Xeno AI Transaction Validator

Enterprise-grade CSV Validation & Data Quality Platform built for the Xeno Internship Assignment.

The platform validates transaction datasets, detects data quality issues, generates downloadable reports, performs schema validation, creates country-wise analytics, and exports cleaned datasets for further processing.

---

## 📌 Problem Statement

Organizations often receive large transaction datasets containing invalid phone numbers, incorrect dates, missing fields, and unsupported payment modes. Manual verification is time-consuming and error-prone.

Xeno AI Transaction Validator automates this process by validating, cleaning, analyzing, and reporting transaction data through a simple web-based interface.

---

## 🎯 Key Features

### Data Validation Engine

* Phone Number Validation
* Date Format Validation
* Payment Mode Validation
* Multi-Country Validation Support
* Required Column Validation
* Transaction Integrity Checks

### CSV Processing

* CSV Upload & Processing
* Cleaned CSV Generation
* Invalid Record Detection
* Automatic CSV Splitting
* Validation Report Generation

### Analytics Dashboard

* Total Records Summary
* Valid Records Count
* Invalid Records Count
* AI Data Quality Score
* AI Validation Insights
* Country Analytics Dashboard

### Error Detection

* Phone Number Errors
* Date Validation Errors
* Payment Validation Errors
* Missing Required Columns
* Record-Level Error Identification

### Export Features

* Download Cleaned CSV
* Download Validation Report
* Validation Statistics Export

---

## 🧠 Advanced Features Implemented

### 1. CSV Schema Validation

Before processing any file, the system verifies whether all required columns exist.

Required Columns:

* order_id
* product_name
* phone
* country
* date
* payment_mode

If any required column is missing, processing is stopped and a detailed error message is displayed.

---

### 2. AI Data Quality Score

The platform calculates a Data Quality Score based on validation success rate.

Example:

* Total Records: 100
* Valid Records: 85

Data Quality Score:

85%

This provides a quick assessment of dataset reliability.

---

### 3. Country Analytics Dashboard

The platform automatically groups records country-wise and displays:

* Total Records
* Valid Records
* Invalid Records

This helps identify region-specific data quality issues.

---

### 4. AI Validation Insights

After processing, the platform generates intelligent insights such as:

* Number of invalid records
* Validation completion status
* Dataset quality score
* Data quality assessment

---

### 5. Validation Report Generator

Generates downloadable reports containing:

* Total Records
* Valid Records
* Invalid Records
* Phone Validation Errors
* Date Validation Errors
* Payment Validation Errors
* Data Quality Score

---

## 📋 Validation Rules

### Phone Validation

#### India

* Must contain exactly 10 digits

#### Singapore

* Must contain exactly 8 digits

---

### Date Validation

Supported Format:

YYYY-MM-DD

Example:

2026-06-17

---

### Payment Mode Validation

Supported Modes:

* UPI
* Cash
* Card
* Wallet
* Net Banking

---

## 🛠️ Tech Stack

### Frontend

* React.js
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* Multer
* CSV Parser

### Data Processing

* File System (FS)
* Custom Validation Engine

### Deployment

* Vercel (Frontend)

---

## 📂 Project Structure

Xeno-Assignment

├── frontend

│ ├── src

│ ├── App.jsx

│ ├── App.css

│ └── ...

│

├── backend

│ ├── server.js

│ ├── validator.js

│ ├── uploads

│ └── output

│

└── README.md

---

## 📊 Sample Workflow

1. Upload CSV File
2. Validate Required Columns
3. Validate Phone Numbers
4. Validate Dates
5. Validate Payment Modes
6. Generate Validation Insights
7. Calculate Data Quality Score
8. Create Country Analytics
9. Generate Validation Report
10. Download Cleaned Dataset

---

## 🌐 Live Demo

Frontend URL:

https://xeno-data-validator.vercel.app

---

## 👨‍💻 Developed By

Aarti Garg

Final Year B.Tech CSE Student

Built as part of the Xeno Internship Assignment 2026.

---

## ⭐ Future Enhancements

* AI Anomaly Detection
* Dynamic Validation Rules
* User Authentication
* Database Integration
* Real-Time Processing Pipeline
* Interactive Data Visualizations
* Multi-File Batch Processing
