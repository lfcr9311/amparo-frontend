# Build
FROM node:18-alpine AS builder
ARG VITE_API_URL=${VITE_API_URL}
ARG VITE_NODE_ENV=${VITE_NODE_ENV}
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_NODE_ENV=${VITE_NODE_ENV}

WORKDIR /app
# Copiar os arquivos
COPY . .
# Roda o 'npm install' sem sobrescrever package-lock.json
RUN npm ci
# Roda a build do Front
RUN npm run build

# Stage 2 - NGINX
FROM nginx:alpine as runner
# Set working directory to nginx asset directory
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy static assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]