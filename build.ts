import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ['./src/gestor_vehiculos.ts'],
    bundle: true,
    outfile: 'gestor_bundle.js',
    external: ['handlers', 'dotenv', 'logger'],
    platform: 'neutral'
})

esbuild.stop()
   