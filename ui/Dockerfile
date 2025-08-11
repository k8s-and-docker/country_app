FROM node:20-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install

ENV host='docker.host.internal'
EXPOSE 4200

CMD ["npm", "run", "dev"]