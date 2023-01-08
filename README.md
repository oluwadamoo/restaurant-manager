# Restaurant Manager Api

### Introduction

Backend for a meal management application that allows users to create, read, update and delete meal addons

### Restaurant Manager Api Features

- Users can signup and login to their accounts
- Admins can make other users Admin
- Admins can create other roles
- Users can create brands
- Users can see all brands
- Users can get brands by id
- Admins can create meal addons for a specific brand
- Admins can get a list of all meal addoins for a specific brand
- Admins can get a single meal addons for a specific brand
- Admins can update a single meal addoins for a specific brand
- Admins can delete a single meal addoins for a specific brand
- Admins can create a new category for meal addoins for a specific brand

### Installation Guide

- Clone this repository [here](https://github.com/oluwadamoo/restaurant-manager.git)
- Run **yarn** to install all dependencies
- Create an .env file in your project root folder and add your variables. see .env.example for assistance.

### Usage

- Run **yarn start:dev** to start the application.
- Connect to the API using Postman on port 4040.

### API Documentation

- Access Api documentation [here](https://documenter.getpostman.com/view/11729281/2s8Z75SpUK)

### API Endpoints

| HTTP Verbs | Endpoints                          | Action                                                          |
| ---------- | ---------------------------------- | --------------------------------------------------------------- |
| POST       | /users/signup                      | To sign up a new user account                                   |
| POST       | /users/sigin                       | To login an existing user account                               |
| PATCH      | /users/make-admin/:user_id         | To make the user with the specified user_id an Admin            |
| POST       | /brands/                           | To create new brand                                             |
| POST       | /brands/:brandId/addons            | To create a new meal addon for the specified brand              |
| POST       | /brands/:brandId/addon-categories  | To create a new category for meal addon for the specified brand |
| PATCH      | /brands/:brandId/addons/addon_id   | To update a meal addon                                          |
| DELETE     | /brands/:brandId/addons/addon_id   | To delete a meal addon                                          |
| GET        | /brands                            | To get all brands                                               |
| GET        | /brands/:brand_id                  | To get a specific brand                                         |
| GET        | /brands/:brand_id/addons           | To get all meal addons for a specific brand                     |
| GET        | /brands/:brand_id/addons/:addon_id | To get a specific meal addon for a specific brand               |

### Technologies Used

- [NestJS](https://nestjs.com/)

- [Postgresql](https://www.postgresql.org/)

- [KnexJS ORM](https://knexjs.org/)

- [ObjectionJs](https://vincit.github.io/objection.js/)

### Author

- [Damilola Saliu](https://github.com/oluwadamoo)
