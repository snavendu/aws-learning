FROM node:16

WORKDIR /app

COPY . .

CMD ["yarn", "dev"]

EXPOSE 3000
