FROM node:8
MAINTAINER Hans Gamarra

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN yarn install

# Build the app
RUN yarn build

# Expose the app port
EXPOSE 3000

# Start the app
CMD yarn start
