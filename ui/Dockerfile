FROM hayd/alpine-deno:1.3.3

EXPOSE 3000

WORKDIR /app

USER deno

COPY deps.ts /app
RUN deno cache deps.ts

ADD . /app
RUN deno cache mod.ts

CMD ["run", "--allow-net", "--allow-read", "mod.ts"]