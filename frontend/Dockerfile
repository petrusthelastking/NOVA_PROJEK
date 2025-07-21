# Stage 1: Development Environment
FROM node:20-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Stage 2: Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 3: Production Stage (final, image kecil)
FROM nginx:stable-alpine AS production
# Salin hasil build dari stage 'build' ke direktori web server Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Salin konfigurasi Nginx jika ada (opsional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
