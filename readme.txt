1: Note Vite supports using ES modules syntax in the config file even if the project is not using native Node ESM, eg in 
2:Alternatively, you can use the helper which should provide intellisense without the need for jsdoc annotations:
3: Note that Vite doesn't load files by default as the files to load can only be determined after evaluating the Vite config, for example, the and options affect the loading behaviour.
loadEnv ,defineConfig     Global variable=.env 

4 :***** Because it's implemented as straightforward text replacements without any syntax analysis, we recommend using define for CONSTANTS only.


5: ***** For TypeScript users, make sure to add the type declarations in the env.d.ts or vite-env.d.ts file to get type checks and Intellisense.

add  vite-plugin-inspect ======.VITE-inspect