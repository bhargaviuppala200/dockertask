# Node Express Backend Architecture

## **Clone the Repository**

```sh
git clone https://github.com/Mohdsahil/node-express-backend-articture.git
cd node-express-backend-articture
```

## **Install Dependencies**

```sh
npm install
```

## **Environment Variables**

Create a `.env` file in the project root and add the following variables:

```env
PORT=3001
DB_URL=<YOUR_DB_URL>
JWT_SECRET=<YOUR_SECRET>
BASE_URL=http://localhost:3001
```

---

## **Run the Project Without Docker**

```sh
npm run start
```

---

## **Run the Project Using Docker**

### **1. Build the Docker Image**

```sh
docker build -t node-express-app .
```

### **2. Run the Docker Container**

```sh
docker run -p 3001:3001 --env-file .env node-express-app
```

The app will be accessible at **[http://localhost:3001](http://localhost:3001)**

---

## **Run the Project Using Docker Compose**

If you have multiple microservices, use docker-compose.yml to manage them together.

### **1. Start All Services**

```sh
docker-compose up -d
```

### **2. Stop All Services**

```sh
docker-compose down
```

### **3. Restart Containers**

```sh
docker-compose restart
```

Now your **Node.js microservices** can run using Docker and Docker Compose 🚀.

---

## **Docker File Paths**

- `admin`
- `client`
- `client-steaming`

