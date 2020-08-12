# ---------- build stage ----------
FROM node:latest AS build
# pull down node and label this stage as 'build' for future reference

WORKDIR /build
# create and move to a build dir

ADD https://github.com/vishnubob/wait-for-it.git .
# add the repo into current dir

COPY ./package*.json ./
# copy over these files also

RUN npm ci --production
# install  dependencies from the package-lock.json pruning dev dependencies

COPY . ./
# copy everything thing else


# ---------- runtime stage ----------
FROM alpine:3.10
# use alpine (much smaller base image)

RUN apk add --update nodejs
# only install what is necessary to run the app

RUN addgroup -S node && adduser -S node -G node
# create group and user to limit user's capabilities

USER node
# asign user

RUN mkdir /home/node/src
# make dir as user 'node' so it can access it

WORKDIR /home/node/src
# move to that dir

COPY --from=build --chown=node:node /build .
# copy everything from build stage into this dir as user node

CMD ["npm", "start"]
# run npm start
