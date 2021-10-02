FROM ruby:2-alpine

ENV RACK_ENV production

WORKDIR /usr/src/app/
COPY . .

RUN bundle install

EXPOSE 4567

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]
