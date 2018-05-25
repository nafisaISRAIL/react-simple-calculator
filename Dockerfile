FROM node:latest

#set working directory
RUN mkdir /usr/src/app
WORKDIR /app/src/app
COPY . ./
RUN npm install

CMD ["npm", "start"]

EXPOSE 3000
