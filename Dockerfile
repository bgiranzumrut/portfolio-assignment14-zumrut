# === Builder stage ===
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build for production
RUN npm run build

# === Production stage ===
FROM nginx:alpine

# Container and working directory as per assignment
WORKDIR /zumrut_busra_final_site

# Copy build output from previous stage
COPY --from=builder /app/dist ./

# Replace default Nginx config to serve from correct root
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the required port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
