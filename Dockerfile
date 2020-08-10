FROM node:latest
RUN git clone  https://github.com/vishnubob/wait-for-it.git
COPY ./package*.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]
