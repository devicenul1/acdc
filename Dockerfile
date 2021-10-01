FROM node:14-alpine as builder
WORKDIR /drop/

COPY ./ /drop/

# inject environment variables into the react app
ENV NODE_ENV=production\
    REACT_APP_OPEN_BREWERY_DB_BASE_URL=https://api.openbrewerydb.org/

RUN npm ci && \
    npm run build

FROM nginx:alpine
COPY --from=builder /drop/build /usr/share/nginx/html

# for heroku
COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template
