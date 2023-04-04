FROM mcr.microsoft.com/playwright:v1.30.0-focal

# Instalação das dependências do sistema


# Diretório de trabalho
WORKDIR /app

# Copiar arquivos
COPY . .

# Instalar dependências da aplicação
RUN npm install

# Comando para iniciar a aplicação
CMD ["npm", "start"]
