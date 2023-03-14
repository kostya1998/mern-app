# LinksBox-app

This project is implemented on the popular stack - MERN (MongoDB, Express, React, Node.js). The application itself provides a convenient interface for maintaining a list of links of visited pages. The application implements an authorization interface with validation, passwords hashing, on the server side, and subsequent user registration.

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
2. Download or clone a repository from GitHub: `git clone https://github.com/kostya1998/MERN.git`.
3. Go to your project folder: `cd your-repository`.
4. Install dependencies: `npm install`.
5. Create an `.env` file at the root of your project and add the following environment variables:

```bash
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster-url.your-provider.net/your-database-name?retryWrites=true&w=majority
SECRET_KEY=your-secret-key
Replace your-username, your-password, your-cluster-url, your-provider, your-database-name and your-secret-key with your values.

Run the application: npm run sev.
Usage
Open a browser and navigate to http://localhost:5000. You will see the main page of the application. Here you can register or log in if you already have an account. After logging in, you will be able to add links, edit or delete them.

## Author
kostia
