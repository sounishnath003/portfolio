FROM --platform=linux/amd64 node:20-slim AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm cache clean --force
RUN npm install 
RUN npm run build


FROM nginx:1.27.3-alpine

COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80