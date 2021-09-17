# back-end
Water My Plants Endpoints:
API: https://watermyplants01.herokuapp.com/api/

Auth: /api/auth
HTTP Methods:
GET - /logout
POST - /register (required user properties: username, password, phone_number), /login (required properties: username, password)

Users: /api
HTTP Methods:
GET - /users, /user/:id
PUT - /users/:id

Plants: /api
HTTP Methods:
GET - /plants, /plants/:id
PUT - /plants/:id
POST - /plants (required plant properties: nickname, species, h2oFrequency)
DELETE - plants/:id
