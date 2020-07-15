FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]