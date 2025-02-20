# 📌 `/users/register` Endpoint Documentation

## **Endpoint:**
`POST /users/register`

## **Description:**
This endpoint allows users to **register** by providing their fullname, email, and password.

## **Request Format:**
- **Content-Type:** `application/json`
- **Method:** `POST`

## **Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

## **Response:**
### ✅ **Success Response:**
- **Status Code:** `201 Created`
- **Description:** User registered successfully.
- **Response Body:**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

### ❌ **Error Responses:**
#### 1️⃣ **Validation Error:**
- **Status Code:** `400 Bad Request`
- **Description:** Input validation failed.
- **Response Body:**
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

#### 2️⃣ **Missing Required Fields:**
- **Status Code:** `400 Bad Request`
- **Description:** Required fields are missing.
- **Response Body:**
```json
{
  "error": "All fields are required"
}
```

#### 3️⃣ **Email Already Exists:**
- **Status Code:** `409 Conflict`
- **Description:** The email is already registered.
- **Response Body:**
```json
{
  "error": "Email is already in use"
}
```

## **Notes:**
- The password must be at least **6 characters long**.
- The firstname must be at least **3 characters long**.
- The email should be a **valid email format**.
- A **JWT token** is returned upon successful registration.

# 📌 `/users/login` Endpoint Documentation

## **Endpoint:**
`POST /users/login`

## **Description:**
This endpoint allows users to **login** by providing their email and password.

## **Request Format:**
- **Content-Type:** `application/json`
- **Method:** `POST`

## **Request Body:**
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

## **Response:**
### ✅ **Success Response:**
- **Status Code:** `200 OK`
- **Description:** User logged in successfully.
- **Response Body:**
```json
{
  "token": "<JWT_TOKEN>",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

### ❌ **Error Responses:**
#### 1️⃣ **Validation Error:**
- **Status Code:** `400 Bad Request`
- **Description:** Input validation failed.
- **Response Body:**
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

#### 2️⃣ **Invalid Credentials:**
- **Status Code:** `401 Unauthorized`
- **Description:** Invalid email or password.
- **Response Body:**
```json
{
  "message": "Invalid email or password"
}
```

## **Notes:**
- The password must be at least **6 characters long**.
- The email should be a **valid email format**.
- A **JWT token** is returned upon successful login.

# 📌 `/users/profile` Endpoint Documentation

## **Endpoint:**
`GET /users/profile`

## **Description:**
This endpoint allows authenticated users to **retrieve their profile information**.

## **Request Format:**
- **Content-Type:** `application/json`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`

## **Response:**
### ✅ **Success Response:**
- **Status Code:** `200 OK`
- **Description:** User profile retrieved successfully.
- **Response Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com"
}
```

### ❌ **Error Responses:**
#### 1️⃣ **Unauthorized:**
- **Status Code:** `401 Unauthorized`
- **Description:** Missing or invalid token.
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

## **Notes:**
- The request must include a valid **JWT token** in the `Authorization` header.

# 📌 `/users/logout` Endpoint Documentation

## **Endpoint:**
`GET /users/logout`

## **Description:**
This endpoint allows authenticated users to **logout** by invalidating their token.

## **Request Format:**
- **Content-Type:** `application/json`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <JWT_TOKEN>`

## **Response:**
### ✅ **Success Response:**
- **Status Code:** `200 OK`
- **Description:** User logged out successfully.
- **Response Body:**
```json
{
  "message": "Logout successful"
}
```

### ❌ **Error Responses:**
#### 1️⃣ **Unauthorized:**
- **Status Code:** `401 Unauthorized`
- **Description:** Missing or invalid token.
- **Response Body:**
```json
{
  "message": "Unauthorized"
}
```

## **Notes:**
- The request must include a valid **JWT token** in the `Authorization` header.

# 📌 `/captains/register` Endpoint Documentation

## **Endpoint:**
`POST /captains/register`

## **Description:**
This endpoint allows captains to **register** by providing their fullname, email, password, and vehicle details.

## **Request Format:**
- **Content-Type:** `application/json`
- **Method:** `POST`

## **Request Body:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "janedoe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## **Response:**
### ✅ **Success Response:**
- **Status Code:** `201 Created`
- **Description:** Captain registered successfully.
- **Response Body:**
```json
{
  "token": "<JWT_TOKEN>",
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "janedoe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### ❌ **Error Responses:**
#### 1️⃣ **Validation Error:**
- **Status Code:** `400 Bad Request`
- **Description:** Input validation failed.
- **Response Body:**
```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

#### 2️⃣ **Missing Required Fields:**
- **Status Code:** `400 Bad Request`
- **Description:** Required fields are missing.
- **Response Body:**
```json
{
  "error": "All fields are required"
}
```

#### 3️⃣ **Email Already Exists:**
- **Status Code:** `409 Conflict`
- **Description:** The email is already registered.
- **Response Body:**
```json
{
  "error": "Email is already in use"
}
```

## **Notes:**
- The password must be at least **6 characters long**.
- The firstname must be at least **3 characters long**.
- The email should be a **valid email format**.
- The vehicle color and plate must be at least **3 characters long**.
- The vehicle capacity must be a **number**.
- The vehicle type must be one of the following: **car, motorcycle, auto**.
- A **JWT token** is returned upon successful registration.