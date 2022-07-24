FROM node:16 as build
WORKDIR /app
COPY . .
COPY package*.json .
RUN npm install
RUN npm run build

FROM node:16
WORKDIR /app
COPY package*.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD npm run start:prod
EXPOSE 3000
