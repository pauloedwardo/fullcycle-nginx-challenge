FROM node:15

WORKDIR /usr/src/app

COPY . . 

RUN npm install mysql --save

EXPOSE 3000

CMD ["node", "src/index.js"]