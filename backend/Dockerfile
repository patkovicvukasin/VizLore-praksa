FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev        
RUN mkdir -p uploads
COPY . .
EXPOSE 4000
CMD ["node", "src/index.js"]
