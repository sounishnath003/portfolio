FROM --platform=arm64 node:16
WORKDIR /app
COPY . .
RUN
RUN npm install -g ng-tailwindcss
RUN npm install -c production
EXPOSE 4200
ENTRYPOINT [ "npm", "start" ]