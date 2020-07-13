FROM node:14.5

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci

COPY --chown=node:node . .
ENTRYPOINT ["npm"]
CMD ["run", "develop"]
