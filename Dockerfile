FROM node:12

WORKDIR /app

COPY package*.json ./
RUN npm install serverless@2.71.0
RUN npm install --dev

COPY . .

CMD [ "npm", "start" ]