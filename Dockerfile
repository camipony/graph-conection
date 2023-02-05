FROM node:16

WORKDIR /graphql

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 5000
CMD [ "node", "index.js" ]