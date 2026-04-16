# --- Stage 1: Build the React App ---
FROM node:18-slim as build

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Copy the static build files from the first stage
COPY --from=build /app/build /usr/share/nginx/html

# IMPORTANT: Copy the custom nginx.conf we created earlier
# This handles the /api proxying to your K8s backend
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]