# Mjukvarutestare-Frontend
Workspace to Mjukvarutestare-JavaScript

This project is made with JavaScript and HTML to simulate a simple frontend home page with login and password authentication.
It includes an database to store the login and password information in raw data, with this db schema:
### Database schema
```
Tables: users
Columns:
id        - int PK, AutoIncrement,
username  - string, unique,
password  - string
```

For testing it exist an coverage report with the following results:
### Coverage report
```
PASS Test/UserManager.test.js
PASS Test/UserDatabase.test.js
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |                   
 Database         |     100 |      100 |     100 |     100 |                   
  Connect.js      |     100 |      100 |     100 |     100 |                   
 Models           |     100 |      100 |     100 |     100 |                   
  User.js         |     100 |      100 |     100 |     100 |                   
  UserDatabase.js |     100 |      100 |     100 |     100 |                   
  UserManager.js  |     100 |      100 |     100 |     100 |                   
------------------|---------|----------|---------|---------|-------------------
```
### User Experience
And for UX testing with Cypress it simulate this situations:
1) Registration of an new user with password
2) Login with user and password from 1), do change password
3) Login with user and password from 2) with new password and do change back password
4) Login with user and password from 3) to test the password from 1)

I have not ability to test UX on Github because it used an server and database connection on localhost
