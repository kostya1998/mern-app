# README

This project is a tutorial application for shortening and storing links. The main goal of the project is to get acquainted with the concept of the MERN stack (MongoDB, Express, React, Node.js).

## APIs

The project uses the following APIs:

### Database

The remote MongoDB database is connected to the server using Mongoose and contains collections of users and links.

### Client

A React application is deployed in the client folder, which closely interacts with the server using Rest API technology and displays data from the server.

### Server

The server is the root of the project and is implemented using the Express framework. It implements the main logic, it accepts requests from the client, such as login and password, checks them for validity and returns a response to the client in case of an error. The server also hashes passwords, checks for data in the database, and adds and removes data.

## Installation

1. Download and install Node.js from the official site https://nodejs.org/.
2. Download or clone a repository from GitHub: `git clone https://github.com/your-username/your-repository.git`.
3. Go to your project folder: `cd your-repository`.
4. Install dependencies: `npm install`.
5. Create an `.env` file at the root of your project and add the following environment variables:

```bash
PORT=3001
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster-url.your-provider.net/your-database-name?retryWrites=true&w=majority
SECRET_KEY=your-secret-key
Replace your-username, your-password, your-cluster-url, your-provider, your-database-name and your-secret-key with your values.

Run the application: npm run dev.
Usage
Open a browser and navigate to http://localhost:3001. You will see the main page of the application. Here you can register or log in if you already have an account. After logging in, you will be able to add links, edit or delete them.

Author
https://instagram.com/kostiadorogii

