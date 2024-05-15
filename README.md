# operaciones-vite
Anotacones git

git init = inicializa el repo
git status =valida el estado de mis archivos
git add . = agregar los archivos
git commit -m "mensaje" = agrega un punto de control al poryecto
git log = historial de commits

gitcapullconstapush


git flow (modelo)

MAIN: 

DEVELOP: rama donde se combinan, sirve rama de integración para proximas versiones - que pasarán a la rama MAIN para un nuevo despliegue 
FEATURE: desarrollo de nuevad caracteristicas pasan a DEVELOP
REALESE: preparas lanzamientos de nuevas verisones (lo suelen hacer los QA)
HOTFIX: se crea a partir de MAIN para arreglar bug urgentes en producción

se crea una nueva rama y tiene que tener un prefijo (identificador)
 git checkout -b feature/identificador de la tarea = para crear en una rama
 git checkout -b feature/loin

* tener en cuenta con los commits
git commit -m "feat:se agrego el html de login" para agregar algo nuevo feat
git commit -m "fix: se cambio o arreglo" para arreglar algo


git clone url
cambiar a la rama personal git checkout -b feature/idenfiticador
git pull origin develop
git push origin feature/identificador