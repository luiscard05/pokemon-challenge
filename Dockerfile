# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:12.6.0 as build-stage

WORKDIR /app

# install and cache app dependencies
COPY package.json package-lock.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

CMD ["npm", "run", "start"]



# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.16.0-alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]