FROM node:16
WORKDIR /usr/app
COPY package.json ./
RUN npm i
COPY . ./
CMD ["npm", "run", "dev"]