# Use a slim version of Node.js for a smaller footprint
FROM node:18-slim

# Create and define the working directory
WORKDIR /app

# Copy dependency files first (optimizes Docker layer caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Your backend listens on 5000 (as per our server.js)
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]