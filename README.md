## description

This is a program that will execute the commands given by frontEnd web Point Of Sales

### Require
- Nodejs
- Postman
- VSCode or other
- terminal

## Featurs
- CRUD PRODUCT
- CRUD CATEGORY
- Checkout
- Register & Login

## Installation

run this command on the terminal

```bash
git clone https://github.com/rohan1358/BackEnd-Point-Of-Sales.git
cd BackEnd-Point-Of-Sales
npm install
```

create a file white the name .env white enter
```bash
SERVER_PORT = "your server port"
DB_HOST = "your database host/localhost"
DB_USER = "your database user/root"
DB_PASSWORD = "your database password/empty"
DB_NAME = "your database name"
PRIVATE_KEY = "your private key"
```
import databse I provide with the file name tasksatu.sql

run this command on the terminal 
```bash
npm start
```

## Using Postman For Testing

### CRUD Product
- For Add Product
```bash
POST http://localhost:'your server port'/api/v1/product
```
- For Read Product
```bash
GET http://localhost:'your server port'/api/v1/product
```
- For Edit Product 
```bash
PATCH http://localhost:'your server port'/api/v1/product/'id product'
```
- For Delete Product
```bash
DELETE http://localhost:'your server port'/api/v1/product/'id product
```

### for CRUD categories do the same keywords as CRUD products only the "product" section changes to "category"

### Login & Register User
- For Register
```bash
POST localhost:'your server port'/api/v1/user/insert
```
- For Login
```bash
POST localhost:'your server port'/api/v1/user/login
```

### Checkout Order
```bash
POST localhost:'your server port'/api/v1/order
```
