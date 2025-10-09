# 1. Basis-Image
FROM node:20-alpine

# 2. Arbeitsverzeichnis im Container
WORKDIR /app

# 3. package.json und package-lock.json kopieren
COPY package*.json ./

# 4. Abhängigkeiten installieren
RUN npm install

# 5. Restlichen Code kopieren
COPY . .

# 8. Startbefehl
CMD ["npm", "start"]
