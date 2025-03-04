FROM node:15

WORKDIR /usr/src/app

RUN npm install express --save && \
    npm install mysql --save

COPY . . 

EXPOSE 3000

CMD ["node", "src/index.js"]