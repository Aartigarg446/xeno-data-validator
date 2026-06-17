# 🚀 Xeno AI Transaction Validator

### Transforming Raw Transaction Data into Clean, Reliable and Actionable Insights

Xeno AI Transaction Validator is a web-based data validation and processing platform designed to improve transaction data quality at scale. The system automatically validates transaction records, detects inconsistencies, generates quality insights, creates cleaned datasets, and splits large CSV files into manageable chunks for efficient processing.

Built with a focus on scalability, usability, and data accuracy, the platform helps organizations reduce manual validation effort and improve the reliability of business-critical transaction data.

---

## 🎯 Problem Statement

Organizations often receive large transaction datasets containing:

* Invalid phone numbers
* Incorrect date formats
* Missing or inconsistent values
* Unsupported payment modes
* Data quality issues that impact business decisions

Manual validation is time-consuming and error-prone.

This platform automates the entire validation workflow and provides instant feedback through an interactive dashboard.

---

## ✨ Core Capabilities

### 🌍 Multi-Country Phone Validation

Supports country-specific validation rules.

| Country   | Validation Rule |
| --------- | --------------- |
| India     | 10 Digits       |
| Singapore | 8 Digits        |

The architecture is configurable and can be extended to additional countries without changing the frontend.

---

### 📅 Date Validation Engine

Validates transaction dates against predefined formats and identifies invalid entries before processing.

---

### 💳 Payment Mode Verification

Ensures only supported payment methods are accepted:

* UPI
* Cash
* Card

---

### 📊 AI Data Quality Scoring

Generates a quality score based on dataset validity and provides immediate feedback regarding overall data health.

Examples:

* 🟢 Excellent Data Quality
* 🟡 Moderate Data Quality
* 🔴 Poor Data Quality

---

### 📈 AI Insights Dashboard

Automatically generates processing insights such as:

* Invalid record count
* Validation statistics
* Data quality metrics
* Processing outcomes

---

### 🧹 Cleaned Dataset Generation

Creates a downloadable cleaned CSV file containing only validated records, ensuring higher-quality downstream processing.

---

### 📂 Automatic CSV Splitting

Large transaction files are automatically divided into smaller chunks for efficient processing and scalability.

---

## 🏗️ System Architecture

```text
CSV Upload
      │
      ▼
Validation Engine
      │
      ├── Phone Validation
      ├── Date Validation
      ├── Payment Validation
      └── Integrity Checks
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

## 🛠️ Technology Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* Multer
* CSV Parser
* File System (FS)

---

## 🔄 Processing Workflow

1. Upload transaction dataset
2. Validate phone numbers
3. Validate dates and payment modes
4. Perform integrity checks
5. Generate AI quality insights
6. Create cleaned output dataset
7. Split large files into chunks
8. Download processed results

---

## ✅ Assignment Requirements Coverage

| Requirement                       | Status |
| --------------------------------- | ------ |
| Order-Level Details               | ✅      |
| Product-Level Details             | ✅      |
| Payment Mode Information          | ✅      |
| Country-Specific Phone Validation | ✅      |
| Date Validation                   | ✅      |
| Data Integrity Checks             | ✅      |
| Cleaned Output Download           | ✅      |
| CSV Splitting                     | ✅      |
| Scalable Processing Workflow      | ✅      |
| User-Friendly Interface           | ✅      |

---

## 📸 Dashboard Highlights

* Enterprise UI
* AI Data Quality Score
* Validation Rules Engine
* Interactive Statistics Cards
* AI Insights Section
* Processed Records Table
* Cleaned CSV Export

---

## 👨‍💻 Developer

**Aarti Garg**

Built for the **Xeno AI Empowerment Assignment** with a focus on automation, data quality, scalability, and user experience.
