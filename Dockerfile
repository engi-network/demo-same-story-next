FROM node:16.14.0

WORKDIR /code

COPY . .

# TODO: install CLI with pipenv

RUN npm install
