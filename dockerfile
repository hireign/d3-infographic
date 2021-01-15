FROM node:12-alpine
# Optional - define app environment production or development
# ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Optional - define app environment production or development
# RUN npm install --production
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]

