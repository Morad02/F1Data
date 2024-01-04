FROM denoland/deno:alpine

LABEL maintainer="kharraz02@correo.ugr.es"

WORKDIR /app/test

COPY deno.json deno.lock ./

RUN chown -R deno:deno /app

USER deno

RUN deno cache --lock=deno.lock --reload --lock-write deno.json

ENTRYPOINT ["deno", "test", "--allow-read", "--unstable", "--allow-net" ,"test/gestor_vehiculos_test.ts", "test/config_ma_test.ts", "test/db_test.ts", "test/api_test.ts" ]
