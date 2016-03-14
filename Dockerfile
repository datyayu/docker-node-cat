FROM node:4.2

# Copia los archivos.
COPY . /app

# Instala dependencias.
WORKDIR /app
RUN npm install

# Inicia la aplicación.
CMD ["node", "app.js"]
EXPOSE 3000
