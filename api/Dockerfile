FROM hayd/alpine-deno:1.3.3

EXPOSE 8000

WORKDIR /app

USER deno

COPY deps.ts /app
RUN deno cache deps.ts

ADD . /app
RUN deno cache mod.ts

CMD ["run", "--allow-net", "mod.ts"]