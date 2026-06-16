# Guia de Trabajo: Git Flow y Buenas Practicas

_Work Guide: Git Flow and Best Practices_

Este documento define el flujo de ramas, Pull Requests y releases del proyecto. El objetivo es trabajar con ramas cortas, cambios revisables y entregas estables al cierre de cada sprint semanal.

## 1. Ramas principales

| Rama | Uso |
| --- | --- |
| `main` | Rama estable de entrega o produccion. Solo recibe cambios desde `dev` mediante Pull Request de release. |
| `dev` | Rama de integracion del sprint. Recibe historias terminadas mediante Pull Request. |

Si el repositorio inicia solo con `main`, crear `dev` antes de empezar:

```bash
git checkout main
git checkout -b dev
```

Flujo general:

```text
feature/* -> Pull Request -> dev
dev       -> Pull Request -> main
```

## 2. Ramas de trabajo

Cada card del sprint debe trabajarse en una rama propia creada desde `dev`.

```bash
git checkout dev
git pull origin dev
git checkout -b feature/FS0005-1-initialize-express-project-with-msc-structure
```

Prefijos permitidos:

| Prefijo | Uso | Ejemplo |
| --- | --- | --- |
| `feature/` | Nueva historia o funcionalidad | `feature/FS0005-1-initialize-express-project-with-msc-structure` |
| `fix/` | Correccion de error durante el sprint | `fix/FS0005-2-cors-error` |
| `update/` | Mejora menor | `update/FS0005-3-health-response` |
| `upgrade/` | Actualizacion de dependencias o tooling | `upgrade/typescript-version` |
| `hotfix/` | Correccion urgente desde `main` | `hotfix/fix-production-start` |

## 3. Convencion de idioma

Los elementos tecnicos deben escribirse en ingles:

- Branch names.
- Commit messages.
- Pull Request titles.
- Variables, functions, classes, files and folders.
- Technical code comments, only when needed.

La documentacion puede estar en espanol, pero los ejemplos tecnicos deben mantenerse en ingles.

Ejemplos:

```text
feature/FS0005-1-initialize-express-project-with-msc-structure
feat: initialize express project with msc structure
fix: handle validation errors
docs: update git flow process
```

## 4. Flujo diario

Trabajar la card:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/FS0005-1-initialize-express-project-with-msc-structure
```

Guardar cambios:

```bash
git add .
git commit -m "feat: initialize express project with msc structure"
```

Actualizar la rama antes de subir:

```bash
git fetch origin
git merge origin/dev
```

Subir la rama:

```bash
git push origin feature/FS0005-1-initialize-express-project-with-msc-structure
```

Abrir Pull Request:

```text
base: dev
compare: feature/FS0005-1-initialize-express-project-with-msc-structure
```

No se hacen merges directos a `dev`.

## 5. Pull Requests

Antes de abrir un Pull Request, verificar:

- La rama fue creada desde `dev`.
- El nombre de la rama incluye el ID de la card.
- El proyecto compila correctamente.
- La funcionalidad fue probada.
- No se suben `.env`, `node_modules` ni archivos innecesarios.
- El Pull Request incluye una sola card o cambio principal.

Formato recomendado:

```text
FS0005-1: Initialize Express project with MSC structure
```

Descripcion minima:

```text
Summary:
- Initialize Express project with MSC structure.

Tests:
- npm run build
- GET /health tested manually
```

Para integrar a `dev`, el Pull Request debe estar revisado, aprobado y sin conversaciones pendientes.

## 6. Tablero Scrum y Git

Relación entre estados del tablero y Git:

| Estado | Accion en Git |
| --- | --- |
| `To Do` | La card aun no tiene rama activa. |
| `In Progress` | Se crea una rama desde `dev` y se trabaja la card. |
| `In Review` | Se abre Pull Request hacia `dev`. |
| `Done` | El Pull Request fue aprobado, mergeado a `dev` y la card cumple sus criterios de aceptacion. |

Ejemplo:

```text
Card: FS0005-1 Initialize Express project with MSC structure
Branch: feature/FS0005-1-initialize-express-project-with-msc-structure
Pull Request: feature/FS0005-1-initialize-express-project-with-msc-structure -> dev
```

## 7. Release semanal

Cada sprint dura una semana. Durante el sprint, `dev` acumula las cards terminadas y aprobadas.

Al cierre del sprint, si `dev` esta estable, se abre un Pull Request de release:

```text
base: main
compare: dev
```

Titulo recomendado:

```text
Release Sprint 1
```

El release PR debe resumir historias incluidas, pruebas realizadas y riesgos conocidos.

## 8. Hotfix

Un `hotfix` se usa solo para corregir un problema urgente en `main`.

```bash
git checkout main
git pull origin main
git checkout -b hotfix/fix-production-start
```

Flujo:

```text
hotfix/* -> Pull Request -> main
hotfix/* -> Pull Request -> dev
```

El cambio debe ir tambien a `dev` para que no se pierda en el siguiente release.

## 9. Reglas finales

- `main` y `dev` deben estar protegidas cuando sea posible.
- Todo cambio entra por Pull Request.
- No se trabaja directo sobre `main` ni `dev`.
- No se suben credenciales ni dependencias instaladas.
- Evitar comandos destructivos como `git reset --hard`, `git push -f` o cambios forzados sin validacion del equipo.
