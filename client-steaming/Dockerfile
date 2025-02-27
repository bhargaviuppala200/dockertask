# Use a lightweight Node.js base image
FROM node:18-alpine

# Set the environment to production
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first for optimized caching
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies in a separate directory to keep the container lean
RUN npm install --production --silent && mv node_modules ../

# Copy the remaining application files
COPY . .

# Expose the required port (change it based on your microservice)
EXPOSE 3200

# Start the service
CMD ["node", "client-steaming.js"]
