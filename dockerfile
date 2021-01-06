FROM node:12.18.1
# Optional - define app environment production or development
# ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]

# Optional - define app environment production or development
# RUN npm install --production
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]

