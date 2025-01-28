# Use a imagem oficial do Node.js
FROM node:16

# Instalar o yt-dlp (e outras dependências necessárias)
RUN apt-get update && apt-get install -y python3-pip ffmpeg && \
    pip3 install -U yt-dlp

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar os arquivos do projeto
COPY . .

# Instalar dependências do Node.js
RUN npm install

# Expor a porta que o app irá rodar
EXPOSE 3000

# Rodar a aplicação
CMD ["npm", "run", "start:prod"]