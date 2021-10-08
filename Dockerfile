FROM node:14-slim
WORKDIR /opt/node-roles-app
COPY app/ .
RUN npm install
CMD ["node", "app.js"]