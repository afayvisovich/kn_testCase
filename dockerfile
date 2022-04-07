FROM node:17

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
COPY src ./src
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
RUN npm install 

EXPOSE 8888
CMD [ "node", "./src/index.js" ]