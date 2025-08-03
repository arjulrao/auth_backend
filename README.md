*** In this Project we learn Auth ***
- First API Create 

*** Package use ***
- express
- mongoose
- dotenv
- JWT Token (jsonwebtoken) -> For create Token

- cookie-parser (use for store cooke data like - Token) Use as a middlewares


* JWTSecretes website for generate secret key 
* jwt decode

# JWT AUthentication
Authentication with JWT (JSON Web Token) is a method used in backend development to verify the identity of users and protect routes or resources.

# Token 
A token is a small piece of data (usually a string) that is used to identify and authenticate a user in backend systems.

🛠️ Types of Tokens (commonly used):
- JWT (JSON Web Token) – Most popular
- Bearer Tokens
- OAuth Tokens
- Session Tokens

* jwt.sing is use for crate token
- we provide user object and JWT_SECRET
- JWT_SECRET is a string. With the help of JWT_SECRET we create token.


* JWT.verify check token is correct or not 
- We provide token which is user send and JWT_SECRET 


* Use .select or .lean method  