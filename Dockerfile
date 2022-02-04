FROM node:12.6.0
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN ls -a
RUN npm i

CMD ["npm","run","start"]

