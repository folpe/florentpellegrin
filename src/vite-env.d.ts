/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WIP_FLAG: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
