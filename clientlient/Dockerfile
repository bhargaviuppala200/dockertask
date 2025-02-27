# Use a Debian-based Node.js base image
FROM node:18

# Set the environment to production
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (optimized caching)
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies in a separate directory to keep the container lean
RUN npm install --production --silent && mv node_modules ../

# Copy the remaining application files
COPY . .

# Expose the required port
EXPOSE 3001

# Ensure the correct entry point
CMD ["node", "clientlient.js"]