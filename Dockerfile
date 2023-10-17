# Build Stage
FROM node:18-alpine AS builder
ARG VITE_API_URL=${VITE_API_URL}
ARG VITE_NODE_ENV=${VITE_NODE_ENV}
ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_NODE_ENV=${VITE_NODE_ENV}

WORKDIR /app
COPY . .

# Instale as dependências e crie o build
RUN npm ci
RUN npm run build

# Stage 2 - NGINX
FROM nginx:alpine as runner
RUN rm -rf /usr/share/nginx/html/*

# Use o diretório 'dist' onde o Vite gera os arquivos de build
COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]