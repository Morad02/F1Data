FROM denoland/deno:alpine

LABEL maintainer="kharraz02@correo.ugr.es"

WORKDIR /app/test

COPY deno.json .

RUN chown -R deno:deno /app

USER deno

RUN deno cache --lock=deno.lock --reload --lock-write deno.json

ENTRYPOINT ["deno", "test", "--allow-read", "test/gestor_vehiculos_test.ts"]
