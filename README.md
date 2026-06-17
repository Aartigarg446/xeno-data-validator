# 🚀 Xeno AI Transaction Validator

### Transforming Raw Transaction Data into Clean, Reliable and Actionable Insights

Xeno AI Transaction Validator is a web-based transaction data validation and processing platform designed to improve data quality through automated validation, intelligent analysis, and cleaned dataset generation.

The platform validates transaction datasets, detects data inconsistencies, generates quality insights, creates cleaned outputs, and automatically splits large CSV files into smaller manageable chunks for efficient processing.

Built with scalability, automation, and user experience in mind, the system helps organizations reduce manual validation efforts and improve the reliability of transaction data.

---

# 🎯 Problem Statement

Transaction datasets often contain:

* Invalid phone numbers
* Incorrect date formats
* Unsupported payment modes
* Missing or inconsistent values
* Poor-quality data affecting business decisions

Manual validation is time-consuming and error-prone.

This platform automates the validation process and provides instant quality insights through an interactive dashboard.

---

# ✨ Core Features

## 🌍 Multi-Country Phone Validation

Supports country-specific phone validation rules.

| Country   | Validation Rule |
| --------- | --------------- |
| India     | 10 Digits       |
| Singapore | 8 Digits        |

The validation engine is configurable and can easily support additional countries.

---

## 📅 Date Validation

Validates transaction dates against predefined formats and identifies invalid entries before processing.

Supported Format:

```text
YYYY-MM-DD
```

---

## 💳 Payment Mode Validation

Validates supported payment methods:

* UPI
* Cash
* Card

---

## 🛡️ Data Integrity Checks

Performs integrity checks across transaction records to ensure consistency and reliability.

---

## 🧹 Cleaned Dataset Generation

Automatically generates a cleaned CSV file containing only validated records and makes it available for download.

---

## 📂 Automatic CSV Splitting

Large CSV files are automatically split into smaller chunks for better scalability and efficient processing.

---

# 🌟 Additional Enhancements Implemented

Beyond the assignment requirements, the platform includes several usability and analytics enhancements:

* 🤖 AI Data Quality Score Engine
* 📊 AI Insights Dashboard
* 📈 Validation Analytics (Total, Valid, Invalid Records)
* 🎯 Enterprise-Style Dashboard UI
* 📋 Interactive Validation Results Table
* 🟢🔴 Status Badges for Quick Analysis
* 📖 Validation Rules Display Panel
* ⚡ Real-Time Processing Feedback
* 🌐 Multi-Country Validation Support
* 🚀 Modern Responsive User Interface

---

# 📊 AI Data Quality Score

The platform calculates a dataset quality score based on validation results and categorizes the dataset quality as:

* 🟢 Excellent Data Quality
* 🟡 Moderate Data Quality
* 🔴 Poor Data Quality

This helps users quickly assess the overall health of uploaded datasets.

---

# 📈 AI Insights Dashboard

The system generates useful insights including:

* Invalid record count
* Validation statistics
* Processing outcomes
* Data quality percentage
* Dataset health analysis

---

# 🏗️ System Workflow

```text
CSV Upload
      │
      ▼
Validation Engine
      │
      ├── Phone Validation
      ├── Date Validation
      ├── Payment Validation
      └── Data Integrity Checks
      │
      ▼
AI Insights & Quality Analysis
      │
      ▼
Cleaned Dataset Generation
      │
      ▼
CSV Chunk Processing
      │
      ▼
Downloadable Output
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Axios
* CSS3

## Backend

* Node.js
* Express.js
* Multer
* CSV Parser
* File System (FS)

---

# 🚀 Key Differentiators

Unlike a basic CSV validator, this solution provides an end-to-end transaction data processing workflow that combines:

* Validation
* Data Quality Analysis
* Interactive Dashboard Analytics
* Cleaned Dataset Generation
* CSV Chunk Processing
* Downloadable Processed Outputs

within a single platform.

---

# ✅ Assignment Requirements Coverage

| Requirement                       | Status |
| --------------------------------- | ------ |
| Order-Level Details               | ✅      |
| Product-Level Details             | ✅      |
| Payment Mode Information          | ✅      |
| Country-Specific Phone Validation | ✅      |
| Date Validation                   | ✅      |
| Data Integrity Checks             | ✅      |
| Cleaned Output Generation         | ✅      |
| Downloadable CSV Output           | ✅      |
| Automatic CSV Splitting           | ✅      |
| User-Friendly Dashboard           | ✅      |
| Scalable Processing Workflow      | ✅      |

---

# 📸 Dashboard Highlights

* Enterprise Dashboard UI
* AI Data Quality Score
* AI Insights Section
* Validation Rules Engine
* Statistics Cards
* Interactive Results Table
* Status Badges
* Cleaned CSV Export

---

# 👨‍💻 Developer

**Aarti Garg**

Built as part of the **Xeno AI Empowerment Assignment** with a focus on automation, data quality, scalability, and user experience.
