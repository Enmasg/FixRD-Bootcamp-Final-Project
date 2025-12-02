# Core

## Descripción

Módulo central del proyecto. Contiene la lógica compartida, tipos e interfaces que consumen otras piezas del repositorio.

## Estructura (resumen)

- src/ — código fuente
- dist/ — artefactos de build
- tests/ — pruebas unitarias
- package.json — metadatos y scripts

## Requisitos

- Node.js (versión LTS recomendada)
- npm (o gestor compatible)

## Instalación

1. Instalar dependencias:

```
npm install
```

2. Para publicar localmente use los comandos de Verdaccio indicados más arriba en este documento.

## Build

Generar artefactos de distribución:

```
npm run build
```

Resultado esperado: salida en `dist/` (u otra carpeta indicada en package.json/tsconfig).

## Uso

Importar desde el paquete o enlazar localmente según el flujo del monorepo:

- En desarrollo: link/local registry
- En producción: paquete publicado al registro correspondiente

## Verdaccio

Instalar Verdaccio

```
npm install -g verdaccio
```

Correr Verdaccio

```
verdaccio
```

Crear usuario

```
npm adduser --registry http://localhost:4873/
```

Publicar

```
npm publish --registry http://localhost:4873/
```

Despublicar

```
npm unpublish @bootcamp/core@1.0.2 --force --registry http://localhost:4873/
```
