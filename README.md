# Deposita Cash Operations

A full-stack banking mini transactions management system build with **Spring Boot** (backend) and **Angular** (frontend).

## Tech stack
backend - Java 17, Springboot 3.4.5, and hibernate

Frontend - Angular 17, Angular MAterial

Database - Microsoft SQL Server express

API DOCs - Springdoc OpenAPI (Swagger UI)

## Prerequisites
Have the following installed
- Git
- JDK 17 you must set it as `JAVA_HOME`
- node.js 18+ I have node 20
- SQL Server express
-  install also Angular CLI globally
    ```bash
    npm install -g @angular/cli@17
    ```

    ## let's get started
   ### 1. Clone the repository
   ```bash
   git clone https://github.com/MamaboloGtub/cash-operations.git
   ```
   This will give you both the projects in one directory.

   ### 2. Database setup
   Open **SQL Server Management Studio** and run:
```sql
CREATE DATABASE BankingDB;
GO

USE BankingDB;
GO

CREATE TABLE Transactions (
    TransactionId   INT IDENTITY(1,1) PRIMARY KEY,
    Amount          NUMERIC(18,2)  NOT NULL,
    Description     VARCHAR(255)   NOT NULL,
    TransactionType VARCHAR(50)    NOT NULL,
    status          VARCHAR(50) NOT NULL,
    DateCreated     DATETIME2(7)   NOT NULL
);
GO
```
Sometimes you might need to run ``` Create DATABASE BankingDB ``` before executing others, and confirm that the db exists.
> **Note:** The application connects to SQL Server Express on `localhost\SQLEXPRESS` with the username `sa`.  
> If your instance name, username, or password differs, update `src/main/resources/application.yaml` in the backend project before running.

### 3. Backend setup
```bash
# Navigate into the backend folder
cd cash-operations

# Build the project (skipping tests)
.\mvnw clean package -DskipTests

# Run the application
.\mvnw spring-boot:run
```
The backend starts on **http://localhost:8080**

> On first run, `data.sql` automatically seeds 18 sample transactions into the database if the `Transactions` table is empty.

### 4. Frontend Setup

Open a **new terminal** window:

```bash
# Navigate into the frontend folder
cd cash-operations-fe

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend starts on **http://localhost:4200**

## ENDPOInts
`GET` - `/api/transactions` - get all tranactions

`POST` - `/api/transactions` - create a new transation

`PUT` - `/api/transactions/{id}` - Update a transation

`DELETE` - `/api/transactions/{id}` - Delete a transaction

## Accessing the Application
Frontend - http://localhost:4200

REST API - http://localhost:8080/api/transactions

Swagger UI - http://localhost:8080/swagger-ui/index.html


