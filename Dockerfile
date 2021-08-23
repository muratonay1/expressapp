FROM node:16-alpine
WORKDIR /expressmurat
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]