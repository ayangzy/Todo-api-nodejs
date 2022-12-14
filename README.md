
## Task
Challenge <br>
Develop two Services (TodoAPIs and TodoMVC) with the following specifications: <br>

TodoAPIs <br>
An Application programming interface (API) service written in Javascript (NodeJs/ExpressJs)
that enables the client:
(i) Create Todos <br>
(ii) Read Todos <br>
(iii) Update Todos <br>
(iv) Delete Todos <br>
The Client is the TodoMVC which will be specified below. Please note that the Client must
be authenticated with JWT and all API endpoints must contain a middleware that validates
the Client. MongoDB should be used as the Database. <br>

TodoMVC <br>
A Model-View-Controller(MVC) application written with Php (Laravel framework) that has
an independent authentication system to register and login a User using a MySQL database.
This app has its forms (views) and uses the TodoAPIs above for the Todo CRUD operations.
It enables an authorized User do the following:
(i) Create Todos <br>
(ii) Read Todos<br>
(iii) Update Todos<br>
(iv) Delete Todos<br>
## Installation & Usage
<hr/>

### Downloading the Project


This framework requires PHP 8.0, laravel 9 and mysql database
.  
You can simply clone  ``Todo-api-nodejs`` like below on your git bash

```bash
https://github.com/ayangzy/Todo-api-nodejs.git
```
After cloning the project, please run this command on the project directory to install the project dependencies
```
npm install
```
### Configure Environment
Create a  ```.env``` file in the root directory of the project and add the following. 
```
PORT=XXXX ( your port )
MONGO_URL=XXXX ( your mondb connection url)
JWT_SERCRET=XXXX (generate jwt secrete)
JWT_LIFETIME=XXXX (Jwt expiry time)

```
To access any endpoint, you will need to generate a jwt token. I have exposed an endpoint to achieve that. Kindly check postman collection for more details

To serve your application run,
```
npm start
```

## Security

If you discover any security related issues, please email felixdecoder2020@gmail.com instead of using the issue tracker.

## Credits

- [Ayange Felix](https://github.com/ayangzy)


