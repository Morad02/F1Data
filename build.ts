import * as esbuild from "https://deno.land/x/esbuild@v0.15.5/mod.js";

await esbuild.build({
    entryPoints: ['./src/gestor_vehiculos.ts'],
    bundle: true,
    outfile: 'gestor_bundle.js',
    external: ['handlers', 'dotenv', 'logger'],
    platform: 'neutral'
})

esbuild.stop()
   