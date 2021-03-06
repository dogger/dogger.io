﻿FROM node:14
ARG STRIPE_PUBLISHABLE_KEY
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
WORKDIR /app
COPY [".", "."]
RUN npm install
RUN REACT_APP_STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY} GATSBY_STRIPE_PUBLISHABLE_KEY=${STRIPE_PUBLISHABLE_KEY} npm run build
RUN AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} npm run deploy