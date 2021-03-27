FROM node:12

WORKDIR /app

COPY ./server/package*.json ./

RUN npm install --production

COPY ./server/build ./

ENV PORT=8080

EXPOSE 8080

CMD ["node", "./"]