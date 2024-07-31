# Real-Time Price Data Dashboard

This project is a mini-website that collects and displays real-time price data for selected stocks and cryptocurrencies. It utilizes a backend built with Express and MongoDB for data management, and a React frontend with Next.js to display the data dynamically.

## Features
Data Collection: Polls real-time price data every few seconds for five selected stocks or cryptocurrencies from the CoinGecko API.
Data Storage: Stores this data in a MongoDB database.
Dynamic Frontend: Displays the most recent 20 entries from the database in a dynamically updating table.
Interactive UI: Includes a modal to change the currently displayed stock or cryptocurrency.

## Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v18.x or later)
npm or yarn
MongoDB installed and running on your local machine

## Installation
Follow these steps to get your development environment running:

### Clone the repository:
git clone https://github.com/yourusername/real-time-price-dashboard.git
cd real-time-price-dashboard

### Install backend dependencies
cd backend
npm ci

### Install frontend dependencies
cd ../frontend
npm ci

Set up environment variables:
Create a .env file in the backend directory.

MONGO_URI=mongodb://localhost:27017/your-database
PORT=3001

## Running the Application
To run the application locally, follow these steps:

Start the MongoDB service (if not already running)
sudo systemctl start mongod

### Run the backend server:

cd backend
npm run start

### Run the frontend application:

cd frontend
npm run dev

Navigate to http://localhost:3000 in your web browser to view the application.

Contact
If you have any questions or feedback, please contact me at shikhashukla283@gmail.com.

