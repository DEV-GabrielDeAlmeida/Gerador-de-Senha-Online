# 1. Usar uma imagem base do Nginx (um servidor web)
FROM nginx:alpine

# 2. Copiar os arquivos do seu projeto (HTML, CSS, JS) para o diretório de conteúdo estático do Nginx
COPY . /usr/share/nginx/html

# 3. Expor a porta 80 para que o Nginx esteja acessível fora do contêiner
EXPOSE 80