# Zest Data Service

## Table of Contents
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contact](#contact)

## About The Project
Zest Data Service is a full-stack microservice that allows users to register and log in, upload CSV files, process them asynchronously in the background, store the results in MongoDB, and push converted entities to a FIWARE Orion Context Broker. A React + Bootstrap frontend provides a clean UI for authentication, file upload, and real-time status updates.

## Built With
- **Node.js** & **Express** – backend API  
- **React** (Create-React-App) & **Bootstrap** – frontend UI  
- **MongoDB** – user & upload data storage  
- **Redis** & **BullMQ** – job queue for background tasks  
- **FIWARE Orion** – NGSIv2 context broker  
- **Docker** & **Docker Compose** – containerization & orchestration  
- **Axios** – HTTP client for API calls

## Features

- **Korisnička autentikacija**  
  - Landing page sa registracijom i login ekranom  
  - Registracija sa validacijom email-a (regex) i potvrdom lozinke, lozinke se enkriptuju  
  - Login vraća JWT Bearer token za autorizaciju daljih zahteva

- **Upload i obrada CSV fajlova**  
  - Forma na glavnoj stranici za upload CSV fajla  
  - Asinkrono procesuiranje fajla u pozadini (background task)  
  - Konverzija CSV → JSON-LD i NGSIv2 format  
  - Skladištenje rezultata u MongoDB bazu

- **Notifikacije o statusu**  
  - Obaveštenje korisnika kada obrada fajla uspešno ili neuspešno završi  

- **Podesiva CORS politika**  
  - Konfiguriše se za frontend React aplikaciju da izbegne CORS probleme


## Getting Started

### Prerequisites
- Docker & Docker Compose  
- (Optional) Node.js 18+ & npm

### Installation

1. **Clone the repository**  
   ```bash
   git clone <repo-url>
   cd zest-data-service
   ```

2. **Configure environment variables**  
   Copy and edit the backend env:
   ```bash
   cp backend/.env.sample backend/.env
   ```
   Fill in your values:
   ```dotenv
   MONGO_URI_AUTH=mongodb://auth-mongo:27017/authdb
   MONGO_URI_DATA=mongodb://data-mongo:27017/datadb
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=1d
   ORION_URL=http://orion:1026
   PORT=4000
   ```

3. **Start all services with Docker Compose**  
   ```bash
   docker compose up --build -d
   ```
   - Frontend → http://localhost:3000  
   - Backend API → http://localhost:4000/api  
   - Orion Context Broker → http://localhost:1026

4. **(Optional) Local Development**  
   - **Backend**  
     ```bash
     cd backend
     npm install
     npm run dev
     ```
   - **Frontend**  
     ```bash
     cd frontend
     npm install
     npm start
     ```
   The React dev server will open on http://localhost:3000 (proxying API calls to port 4000).

## Contact
- **Ime i prezime**: Vukasin Patkovic  
- **Email**: [vukasinpatkovic@gmail.com](mailto:vukasinpatkovic@gmail.com)  
- **LinkedIn**: [linkedin.com/in/vukasin-patkovic-7209a7355](https://www.linkedin.com/in/vukasin-patkovic-7209a7355/)  
- **GitHub repo**: [github.com/your-org/zest-data-service](https://github.com/your-org/zest-data-service)

