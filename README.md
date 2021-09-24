# back-end

**Water My Plants Endpoints:**

API: https://watermyplants01.herokuapp.com/api/

**Auth:**

_HTTP Methods:_

GET - `/auth/logout`

POST - `/auth/register (required user properties: username, password, phone_number), /auth/login (required properties: username, password)`

**Users:**

_HTTP Methods:_

GET - ` /users/, /users/plants`

PUT - `/users/ (required properties: "changed" phone_number, "changed" password)`

**Plants:**

_HTTP Methods:_

GET - `/plants, /plants/:id`

PUT - `/plants/:id`

POST - `/plants (required plant properties: user_id, nickname, species, h2oFrequency)`

DELETE - `/plants/:id`
