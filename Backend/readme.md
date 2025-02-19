# /users/register Endpoint Documentation

## Description

This endpoint is used to register a new user in the system. It requires specific user details to be provided in the request body.

## Request Body

The request body should be a JSON object with the following fields:

-   `username`: (string, required) The username for the new user.
-   `email`: (string, required) The email address for the new user. Must be a valid email format.
-   `password`: (string, required) The password for the new user.  Should meet minimum complexity requirements (e.g., minimum length).
-   `phone`: (string, required) The phone number for the new user.
-   `location`: (string, optional) The location of the new user.

Example:

```json
{
    "username": "johndoe",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "phone": "123-456-7890",
    "location": "New York"
}
```

## Response Status Codes

-   `201 Created`:  The user was successfully registered.
-   `400 Bad Request`: The request body is invalid or missing required fields.  The response body will contain details about the validation errors.
-   `409 Conflict`:  A user with the provided username or email already exists.
-   `500 Internal Server Error`: An unexpected error occurred on the server.

## Example Success Response

```json
{
    "message": "User registered successfully",
    "userId": "uniqueUserId123"
}
```

