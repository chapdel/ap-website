FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY . .
RUN npm run build


FROM node:18-alpine AS final
WORKDIR /app

ADD package.json .
ADD nuxt.config.js .

COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=40000

EXPOSE 40000

CMD ["npm", "start"]
