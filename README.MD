# **Wunderlist 2.0 API**
Back-end build week project for Wunderlist 2.0

###   **Maintainer**
[@espain16](https://github.com/espain16)

# **Deployed Backend**





# **SUMMARY TABLE OF API ENDPOINTS**

| Table | Method | Endpoint           | Description                                                                                                                                                                                    |
| ----- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users | POST   | /auth/register | Creates a new `user` profile using the information sent inside the the `body` of the request and returns a id.    |
| users | POST   | /auth/login    | On successful login, creates a JSON Web Token &returns a welcome message with the user profile in the body of the response. |

# AUTH ROUTES
## **REGISTER/ LOGIN**
### **Registers a user & Login user**

_Method Url:_ `/auth/register`

_Method Url:_ `/auth/login`

_HTTP method:_ **[POST]**

## **Register/Login**
 Method | Endpoint | Description 
 ------ | -------- | -----------
 POST | `/auth/register` | accepts `username`, `password`, and creates a  `user`, and returns an id number
 POST | `/auth/login` | accepts `username` and `password` and returns a message welcoming user, and a token if username and passwords match

 #### Example of Accepted Register/Login Schema

```

{
  "username": "admin1"
  "password": "pass1",
}

```
```

{
  "message": "Welcome admin1",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTU2Njg4ODQzNCwiZXhwIjoxNTY2OTc0ODM0fQ.zS_W0Gy_vaapk_9kiH3r9znaXrtTLO_zzs16tSB8DHc"
}

```
### Response Codes
#### 201 - Created
#### 400/404 - Bad Request
#### 500 - Internal Server Error


## **Lists**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
GET | `/api/lists` | Authorization | Returns List name and id
POST | `/api/lists` | Authorization | Adds new list to users account
PUT | `/api/lists/:id` | Authorization | Returns updated list
DELETE | `/api/lists/:id` | Authorization | Removes list from users account

### Accepted List Schema
```
{
    "list_name": "Eat more pizza",
    "user_id": 3
}
```

## **Todos**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
GET | `/api/todos` | Authorization | Returns List name and id
POST | `/api/todos` | Authorization | Adds new list to users account
PUT | `/api/todos/:id` | Authorization | Returns updated list
DELETE | `/api/todos/:id` | Authorization| Removes list from users account, successful message will show


### Accepted Todos Schema [GET]
```
[
  {
    "list_name": "Spring Cleaning",
    "id": 1
  },
  {
    "list_name": "Eat more pizza",
    "id": 3
  }
]
```

### Accepted Todos Schema [POST]
```
[{
    "todo_name": "Pet more dogs ",
    "list_id": 2,
	"user_id": 2,
	"description":"Whenever you see a cute dog pet that bad boy, ask first then pet."
  }
```
###Example of successful [DELETE] message 


```
{
  "message": "Todo successfully deleted"
}
```

### Accepted Todos Schema [PUT]
```
[{
    "todo_name": "Pet more dogs ",
    "list_id": 2,
	"user_id": 2,
	"description":"Whenever you see a cute dog pet that bad boy, ask first then pet."
  }
```