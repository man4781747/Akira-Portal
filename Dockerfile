FROM nginx:1.23.3

COPY ./frontendCodes/dist/index.html /var/www/html/index.html
COPY ./frontendCodes/dist/static /var/www/static
COPY ./nginxConfigs/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginxConfigs/nginx.conf /etc/nginx/nginx.conf