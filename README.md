# back-end
**Water My Plants Endpoints:**

API: https://watermyplants01.herokuapp.com/api/

**Auth:**

*HTTP Methods:*

GET - `/auth/logout`

POST - `/auth/register (required user properties: username, password, phone_number), /auth/login (required properties: username, password)`

**Users:**

*HTTP Methods:*

GET - `/users, /user/:id`

PUT - `/users/:id`

**Plants:**

*HTTP Methods:*

GET - `/plants, /plants/:id`

PUT - `/plants/:id`

POST - `/plants (required plant properties: nickname, species, h2oFrequency)`

DELETE - `/plants/:id`
