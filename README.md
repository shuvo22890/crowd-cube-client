# CrowdCube: A Crowd Funding Application

CrowdCube is a crowd funding web application where people can raise funds for different purpose. This project is built using JavaScript & React. The backend of this project is built using NodeJS & MongoDB. Here anyone can browse campaigns created by others. Anyone can create campaign or can donate to campaign of others. A user can modify & delete own campaigns as well.

## Technologies:
- JavaScript
- NodeJS
- NPM
- React
- Firebase
- Express
- MongoDB

## Features:

- User authentication with email & password
- User authentication with Google
- Browse different campaigns
- Pagination and sorting features while browsing different campaigns
- Filter campaigns by different category
- Authenticated users can create modify and delete own campaign
- Authenticated users can donate to any campaign if the deadline isn't passed.

## Dependencis:

- firebase: ^11.0.2
- localforage: ^1.10.0
- match-sorter: ^8.0.0
- moment: ^2.30.1
- prop-types: ^15.8.1
- react: ^18.3.1
- react-awesome-reveal: ^4.2.14
- react-datepicker: ^7.5.0
- react-dom: ^18.3.1
- react-icons: ^5.4.0
- react-photo-view: ^1.2.6
- react-router-dom: ^7.0.2
- react-tooltip: ^5.28.0
- sort-by: ^1.2.0
- sweetalert: ^2.1.2
- swiper: ^11.1.15

## devDependencies:
- @eslint/js: ^9.15.0
- @types/react: ^18.3.12
- @types/react-dom: ^18.3.1
- @vitejs/plugin-react: ^4.3.4
- autoprefixer: ^10.4.20
- daisyui: ^4.12.14
- eslint: ^9.15.0
- eslint-plugin-react: ^7.37.2
- eslint-plugin-react-hooks: ^5.0.0
- eslint-plugin-react-refresh: ^0.4.14
- globals: ^15.12.0
- postcss: ^8.4.49
- tailwindcss: ^3.4.15
- vite: ^6.0.1

## Run On Local Machine
- Run `git clone https://github.com/shuvo22890/crowd-cube-client.git` on your local machine
- After cloning run `cd crowd-cube-client`
- Then run `npm install`
- Create a `.env.local` file on the root of the project and paste the following code
- `VITE_API_KEY=`
- `VITE_AUTH_DOMAIN=`
- `VITE_PROJECT_ID=`
- `VITE_STORAGE_BUCKET=`
- `VITE_MESSAGING_SENDER_ID=`
- `VITE_APP_ID=`
- Create a firebase project and initiate a web app, email+password and google authentication inside the firebase project
- Get the project credentials in the firebase app and provide in keys of env file
- Finally run `npm run dev`

## Live Link:

https://crowd-cube-88fff.web.app

## Backend Repository:

https://github.com/srshubho26/crowd-cube-server
