FROM nginxinc/nginx-unprivileged:stable

USER 0
RUN rm /usr/share/nginx/html/*.html
USER nginx

COPY --chown=nginx build /usr/share/nginx/html
COPY deployment/nginx/default.conf.template /etc/nginx/templates/

ENV NGINX_DOCUMENT_ROOT=/usr/share/nginx/html
ENV PORT=8080