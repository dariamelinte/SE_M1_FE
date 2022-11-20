#build
FROM node:16.13.1 as builder

WORKDIR /app
COPY package*.json ./
RUN NG_CLI_ANALYTICS=false yarn install

COPY . .

RUN yarn run build
CMD npm run start
# # copy from build image
# FROM nginx:1.21.6

# COPY --from=builder /app/build /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g "daemon off;"
