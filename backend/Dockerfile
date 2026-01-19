FROM node

WORKDIR /app


COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8000


ENTRYPOINT [ "node","src/index.js" ]




