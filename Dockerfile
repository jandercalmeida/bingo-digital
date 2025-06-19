# Usa Node.js como base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Porta que será usada
EXPOSE 3000

# Inicia o servidor
CMD ["node", "app.js"]