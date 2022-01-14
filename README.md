# fixbot
fixbot test API

## Warning: this not a production ready API.

# Setup 
- run `cp .env.example .env` to copy the `.env.example` to `.env`
- create a mongodb account
- setup mongodb database
- copy the connection string and paste in `MONGO_URI` and also remember to change the password

this would work for local environment without trouble however, you need to setup `APP_URL` when in production.

# Installation

run `npm install` or `yarn add`

next `npm start`

and you're up and running

Please note: if your package manager is yarn consider deleting `package-lock.json` to avoid conflict with dependencies.

