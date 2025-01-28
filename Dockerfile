# Use a imagem mais recente do Node.js
FROM node:20

# Atualizar pacotes
RUN apt-get update && apt-get install -y python3-pip

# Instalar yt-dlp
RUN pip3 install -U yt-dlp

# Instalar o ffmpeg
RUN apt-get install -y ffmpeg

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos do projeto
COPY . .

# Instalar dependências do Node.js
RUN npm install

# Rodar o build do NestJS
RUN npm run build

# Expor a porta que o app irá rodar
EXPOSE 3000

# Rodar a aplicação
CMD ["npm", "run", "start:prod"]